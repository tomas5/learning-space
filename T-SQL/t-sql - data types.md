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

#### ...
```sql

```