# T-SQL (Transact-SQL)

## query optimization

#### to show detailed information on the executed query

##### Problem: query runs slow
##### Solution: capture execution plan (on missing indexes) by including the following statement before running the query:
```sql
SET STATISTICS SHOWPLAN_XML ON
```

#### optimize transaction logging and locking for the statement. 

Use table hint: TABLOCK

[Table Hints /(Transact-SQL/)](https://msdn.microsoft.com/en-us/library/ms187373.aspx)

##### TABLOCK
Specifies that the acquired lock is applied at the table level. The type of lock that is acquired depends on the statement being executed. For example, a SELECT statement may acquire a shared lock. By specifying TABLOCK, the shared lock is applied to the entire table instead of at the row or page level. If HOLDLOCK is also specified, the table lock is held until the end of the transaction.
When importing data into a heap by using the INSERT INTO <target_table> SELECT <columns> FROM <source_table> statement, you can enable optimized logging and locking for the statement by specifying the TABLOCK hint for the target table. In addition, the recovery model of the database must be set to simple or bulk-logged. For more information, see INSERT (Transact-SQL).

###### Inserting data into a heap with minimal logging
The following example creates a a new table (a heap) and inserts data from another table into it using minimal logging. The example assumes that the recovery model of the AdventureWorks2012 database is set to FULL. To ensure minimal logging is used, the recovery model of the AdventureWorks2012 database is set to BULK_LOGGED before rows are inserted and reset to FULL after the INSERT INTO…SELECT statement. In addition, the TABLOCK hint is specified for the target table Sales.SalesHistory. This ensures that the statement uses minimal space in the transaction log and performs efficiently.

```sql
-- Create the target heap.  
CREATE TABLE Sales.SalesHistory(  
    SalesOrderID int NOT NULL,  
    SalesOrderDetailID int NOT NULL );  
GO  
-- Temporarily set the recovery model to BULK_LOGGED.  
ALTER DATABASE AdventureWorks2012  
SET RECOVERY BULK_LOGGED;  
GO  
-- Transfer data from Sales.SalesOrderDetail to Sales.SalesHistory  
INSERT INTO Sales.SalesHistory WITH (TABLOCK)  
    (SalesOrderID,   
     SalesOrderDetailID)  
SELECT * FROM Sales.SalesOrderDetail;  
GO  
-- Reset the recovery model.  
ALTER DATABASE AdventureWorks2012  
SET RECOVERY FULL;  
GO
```

##### HOLDLOCK
Is equivalent to SERIALIZABLE. HOLDLOCK applies only to the table or view for which it is specified and only for the duration of the transaction defined by the statement that it is used in. 

##### SERIALIZABLE
Is equivalent to HOLDLOCK. Makes shared locks more restrictive by holding them until a transaction is completed, instead of releasing the shared lock as soon as the required table or data page is no longer needed, whether the transaction has been completed or not. The scan is performed with the same semantics as a transaction running at the SERIALIZABLE isolation level. For more information about isolation levels, see SET TRANSACTION ISOLATION LEVEL (Transact-SQL).


##### ROWLOCK
Specifies that row locks are taken when page or table locks are ordinarily taken. When specified in transactions operating at the SNAPSHOT isolation level, row locks are not taken unless ROWLOCK is combined with other table hints that require locks, such as UPDLOCK and HOLDLOCK.


##### XLOCK
Specifies that exclusive locks are to be taken and held until the transaction completes. If specified with ROWLOCK, PAGLOCK, or TABLOCK, the exclusive locks apply to the appropriate level of granularity.


##### UPDLOCK
Specifies that update locks are to be taken and held until the transaction completes. UPDLOCK takes update locks for read operations only at the row-level or page-level. If UPDLOCK is combined with TABLOCK, or a table-level lock is taken for some other reason, an exclusive (X) lock will be taken instead.
When UPDLOCK is specified, the READCOMMITTED and READCOMMITTEDLOCK isolation level hints are ignored. For example, if the isolation level of the session is set to SERIALIZABLE and a query specifies (UPDLOCK, READCOMMITTED), the READCOMMITTED hint is ignored and the transaction is run using the SERIALIZABLE isolation level.




#### to evaluate existing and potential clustered and non-cluestered indexes that will improve performance

[Tutorial: Database Engine Tuning Advisor](https://msdn.microsoft.com/en-us/library/ms166575.aspx)
Use the Database Engine Tuning Advisor.
Database Engine Tuning Advisor examines how queries are processed in the databases you specify, and then recommends how you can improve query processing performance by modifying database structures such as indexes, indexed views, and partitioning.








