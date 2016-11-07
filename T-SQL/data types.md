# t-sql tables

## data types

#### to store data, time and time zone:
[Transact-SQL datetimeoffset](https://msdn.microsoft.com/en-us/library/bb630289.aspx)


```sql
-- YYYY-MM-DD hh:mm:ss[.nnnnnnn] [{+|-}hh:mm]
-- DATETIMEOFFSET

declare @x datetimeoffset
set @x = GETDATE()
select @x as 'datetimeoffset format:'
```

#### output first day of the month (SQL Server 2008):
```sql
declare @currentDate datetime
set @currentDate = GETDATE()
select DATEADD(month, DATEDIFF(month, 0, @currentDate), 0)
```

#### output first day of the month (SQL Server 2012):

[EOMONTH - Transact-SQL](https://msdn.microsoft.com/en-GB/library/hh213020.aspx)

```sql
-- to get the last day of the previous month specify offset -1
select EOMONTH (GETDATE(), -1)

declare @currentDate datetime
set @currentDate = GETDATE()
select DATEADD(DAY, 1, EOMONTH(@currentDate, -1))
-- OR:
select DATEADD(DAY, 1, EOMONTH(GETDATE(), -1))
```

#### output last day of the month (SQL Server 2008):
```sql
declare @currentDate datetime
set @currentDate = GETDATE()
select DATEADD(day, -day(@currentDate), dateadd(month,1,@currentDate))
```

#### output last day of the month (SQL Server 2012):
```sql
declare @currentDate datetime
set @currentDate = GETDATE()
select EOMONTH (@currentDate)
-- OR:
select EOMONTH (GETDATE())
```


#### store files/documents/images in the database table which are accessible via Transact-SQL queries only

```sql
param_one VARBINARY(MAX)
```

#### store documents/images in the database table which are stored as files on the file system

```sql
VARBINARY(MAX) FILESTREAM NULL
-- note: when a table contains a FILESTREAM column, each row must have a nonnull unique row ID
```

[FILESTREAM - SQL Server](https://msdn.microsoft.com/en-us/library/gg471497.aspx)

(FileTables - SQL Server)[https://msdn.microsoft.com/en-us/library/ff929144.aspx]

