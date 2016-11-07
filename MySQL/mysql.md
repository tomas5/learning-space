# mysql

#### to select database

```sql
use `database_name`;
```

#### to see all the tables under the selected database:

```sql
show tables;

SHOW TABLES LIKE '%table_name%';
```

#### to see what database you are running
```sql
SELECT DATABASE();
```

#### to see what user you are running
```sql
SELECT USER();
```

#### search for the specific table:
```sql
select table_name
from information_schema.tables 
where table_name like '%table_name%'
order by table_name desc;
```

#### search for the specific column:
```sql
select *
from information_schema.columns
where table_schema = 'your_database_name'
and table_name = 'your_table_name'
and column_name = 'your_column_name';
```

#### select IF condition
```sql
IF(`gender` = 'Male', 'M','F') as 'gender',
```
#### select CASE condition
```sql
CASE
	WHEN `category_id` = 'category_1' THEN 'Category_001'
	WHEN`category_id` = 'category_2' THEN 'Category_002'
	WHEN `category_id` = 'category_3' THEN 'Category_003'
	WHEN `category_id` = 'category_4' THEN 100 * (select param_3 from table_name where param_1  = value_1 and param_2 = value_2)
	ELSE ''
END as 'Category ID',
```

#### check for duplicates
```sql
SELECT * from table_name group by parameter_name_one , parameter_name_two having count(*) > 1

SELECT count(*), table_name.* from table_name group by parameter_name_one , parameter_name_two having count(*) > 1
```
