# mysql

## to select database

```sql
use `database_name`;
```

## to see all the tables under the selected database:

```sql
show tables;
```

## search for the specific table:

select table_name
from information_schema.tables 
where table_name like '%table_name%'
order by table_name desc;


## select IF condition

IF(`gender` = 'Male', 'M','F') as 'gender',

## select CASE condition

CASE
	WHEN `category_id` = 'category_1' THEN 'Category_001'
	WHEN`category_id` = 'category_2' THEN 'Category_002'
	WHEN `category_id` = 'category_3' THEN 'Category_003'
	WHEN `category_id` = 'category_4' THEN 100 * (select param_3 from table_name where param_1  = value_1 and param_2 = value_2)
	ELSE ''
END as 'Category ID',

## INSERT statement addition, in case we have an existing record:

 ON DUPLICATE KEY
    UPDATE `table_name`.column_name=`table_name`.column_name;

