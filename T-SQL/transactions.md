# t-sql tables

## transactions

All operations that in any way write to the database are treated by SQL Server as transactions.

This includes:
Data manipulation language (DML) statements: INSERT, UPDATE, and DELETE.
Data definition language (DDL) statements: CREATE TABLE and CREATE INDEX.

###### to start transaction
```sql
-- start of the transaction:
begin transaction
-- OR (the short version:)
begin tran
```

The act of controlling the result of transactions in SQL Server:

```sql
-- error occurs and decision made not to commit, then the transaction is rolled back:
rollback

-- or alternatively:
rollback transaction /* OR */ rollback tran /* OR */ rollback work 

```

```sql
-- completes the transaction's changes by committing them:
commit

-- or alternatively:
commit transaction /* OR */ commit tran /* OR */ commit work 
```


###### check transaction status (returned value indicates the total number of the opened transactions/level of transactions)
```sql
select @@TRANCOUNT
```

###### check the state of the transaction (returned value of 1 indicates that there is an uncommitted transaction, but the nesting level is not reported, while value of '-1' indicates that there is an uncommitted transaction, but it cannot be committed due to a prior fatal error.
```sql
select XACT_STATE()
```

###### check transaction status (advanced)
```sql
dbcc opentran
-- to check the user who has open transaction:
sp_who2
```

###### to terminate and roll back the entire transaction in case of sql query raises a run-time error
```sql
SET XACT_ABORT ON   
-- to turn it off:
-- SET XACT_ABORT OFF
```

(SET XACT_ABORT - Transact-SQL)[https://msdn.microsoft.com/en-us/library/ms188792.aspx]


###### to determine SET options for a current session in SQL Server

```sql
DECLARE @options INT
SELECT @options = @@OPTIONS

IF ( (1 & @options) = 1 ) PRINT 'DISABLE_DEF_CNST_CHK' 
IF ( (2 & @options) = 2 ) PRINT 'IMPLICIT_TRANSACTIONS' 
IF ( (4 & @options) = 4 ) PRINT 'CURSOR_CLOSE_ON_COMMIT' 
IF ( (8 & @options) = 8 ) PRINT 'ANSI_WARNINGS' 
IF ( (16 & @options) = 16 ) PRINT 'ANSI_PADDING' 
IF ( (32 & @options) = 32 ) PRINT 'ANSI_NULLS' 
IF ( (64 & @options) = 64 ) PRINT 'ARITHABORT' 
IF ( (128 & @options) = 128 ) PRINT 'ARITHIGNORE'
IF ( (256 & @options) = 256 ) PRINT 'QUOTED_IDENTIFIER' 
IF ( (512 & @options) = 512 ) PRINT 'NOCOUNT' 
IF ( (1024 & @options) = 1024 ) PRINT 'ANSI_NULL_DFLT_ON' 
IF ( (2048 & @options) = 2048 ) PRINT 'ANSI_NULL_DFLT_OFF' 
IF ( (4096 & @options) = 4096 ) PRINT 'CONCAT_NULL_YIELDS_NULL' 
IF ( (8192 & @options) = 8192 ) PRINT 'NUMERIC_ROUNDABORT' 
IF ( (16384 & @options) = 16384 ) PRINT 'XACT_ABORT'
```

###### to check current transaction isolation level of a database

(reference)[http://stackoverflow.com/questions/1038113/how-to-find-current-transaction-level]

```sql
/*** SIMPLE ***/
-- see row isolation level
DBCC useroptions
```

```sql
/*** ADVANCED ***/
SELECT CASE transaction_isolation_level 
WHEN 0 THEN 'Unspecified' 
/*
SELECT CASE WHEN transaction_isolation_level = 0 THEN 'Unspecified' 
*/
WHEN 1 THEN 'ReadUncommitted' 
WHEN 2 THEN 'ReadCommitted' 
WHEN 3 THEN 'Repeatable' 
WHEN 4 THEN 'Serializable' 
WHEN 5 THEN 'Snapshot' END AS TRANSACTION_ISOLATION_LEVEL 
FROM sys.dm_exec_sessions 
where session_id = @@SPID
```

###### transaction isolation level which minimizes the use of the tempdb space, prevents reading queries from blocking writing queries while there is high centention between readers and writers on several tables used the transacion.

```sql
-- to enable: read commited snapshot
SET TRANSACTION ISOLATION LEVEL READ COMMITTED SNAPSHOT;  
GO  
```

##### Shared vs Exclusive locks

Shared locks: Used for sessions that read data—that is, for readers
Exclusive locks: Used for changes to data—that is, writers
