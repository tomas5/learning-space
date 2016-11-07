# T-SQL: DISTINCT vs GROUP BY

## performance

Since the GROUP BY query aggregates before it computes the scalar value and DISTINCT query computes the scalar value before the aggregate - it will produce a difference in the execution plan.

For example, you have a calcualted column such as ROW_NUMBER(), GETDATE() or a user defined function which returns a value.
In such scenario, for DISTINCT first the calculated column gets executed for each row in the table then the scalar columns are added. Where while using GROUP BY, first the scalar columns are grouped by then for each group the calculated column gets calculated. Therefore both will produce a different results (in the execution plan) because DISTINCT and GROUP BY execute the calculated columns in a different order.


## examples

```sql
select parameter_one from table_name GROUP BY parameter_one 
```

```sql
select DISTINCT parameter_one from table_name
```