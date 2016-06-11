# t-sql tables

## views

#### an inline table-valued function 

```sql
CREATE FUNCTION function_name (@p int) -- accept the @p integer parameter
RETURNS TABLE
AS
RETURN
(
	SELECT param_1, param_2, param_3, param_4 -- one-part names to reference columns
	FROM table_name
	WHERE param_4 = @p -- filter the query results by param_4
)
```

#### view and trigger
##### Problem: how to allow users to modify data by using the view created from the multiple tables
##### Solution: create an INSTEAD OF trigger on the view
[Transact-SQL CREATE VIEW](https://msdn.microsoft.com/en-us/library/ms187956.aspx)
[Designing INSTEAD OF Triggers](https://technet.microsoft.com/en-us/library/ms175521.aspx)

```sql

```

