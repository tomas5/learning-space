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







