# t-sql tables

## CAST and CONVERT

##### replace string with integer
```sql
declare @string nvarchar(25)
set @string = 'hello_word1'
select cast(REPLACE(@string,'hello_word','') as integer) as 'Converted Value'
```

##### if value is NULL set to a different value (note: only applies to the same data type)

```sql
-- if the type of parameter's variable is integer:
select isnull(parameter,  0)  from table_name

-- if the type of parameter's variable is integer:
select isnull(parameter, 'empty') from table_name
```

##### if we need to convert one data type to another

```sql
select cast(parameter as varchar(25)) as 'integer converted to string' from table_name
```

##### if the type of parameter's variable is integer and has value of NULL -> convert one data type to another

```sql
select isnull(cast(parameter as varchar(25)), 'empty') from table_name
```

##### if the type of parameter's variable is NULL -> output empty string instead of the NULL

select IIF(parameter IS NULL, '', parameter) AS 'parameter output' from table_name