# T-SQL (Transact-SQL)

#### populate all tables under database

```sql
select * from sys.tables
```

#### to see the table parameters and specifications:
```sql
sp_help 'table_name'
```

#### pull out data from two different tables into one single SELECT

```sql
Select t1.B1 as 'Column One', t2.B2 as 'Column Two'
From
(select param_1 as B1 from table_name where param_2 = 10) as t1,
(select param_2 as B2 from table_name_two where param_3 = 1) as t2
```

#### to start transaction
```sql
begin transaction
-- OR
begin tran

-- rollback
-- commit
```

#### check transaction status
```sql
select @@TRANCOUNT

dbcc opentran
```

#### select IF condition
```sql
IF EXISTS(SELECT * from table_name)
	PRINT 'Positive'
ELSE
	PRINT 'Negative'
```

#### using a common table expression (CTE) | locating duplicates
```sql
select * from table_name

WITH cte AS (
  SELECT param_1, param_2, param_3,  -- *, 
     row_number() OVER(PARTITION BY param_3, param_4 ORDER BY (select NULL)) AS RowOrder
  FROM table_name
  WHERE param_5 NOT IN ('001', '002') -- Except some of the values
)
select * from cte WHERE RowOrder > 1
--delete from cte WHERE RowOrder > 1

select * FROM table_name where param_1 = 'id_of_duplicate'
```




