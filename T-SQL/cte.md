# t-sql: cte

## find dublicates

```sql
WITH cte AS (
  SELECT param_1, param_2, param_3
     row_number() OVER(PARTITION param_2, param_3 ORDER BY (select NULL)) AS RowOrder
  FROM scheme.table_name
  WHERE param_4 = 'value_1'
)
select * from cte WHERE RowOrder > 1
-- delete from cte WHERE RowOrder > 1
```