# t-sql tables

## functions

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



