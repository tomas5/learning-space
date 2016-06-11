# T-SQL (Transact-SQL)

## query optimization

#### to show detailed information on the executed query

##### Problem: query runs slow
##### Solution: capture execution plan (on missing indexes) by including the following statement before running the query:
```sql
SET STATISTICS SHOWPLAN_XML ON
```






