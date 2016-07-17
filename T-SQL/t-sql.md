# T-SQL (Transact-SQL)

##### SSMS tools

[ Red Gate Software](https://www.red-gate.com/products/?gclid=CIGg1fvV680CFUSVGwodzCUJzA)

[ApexSQL](http://www.apexsql.com/Download.aspx)

##### populate all databases

```sql
select * from sys.databases
```

##### populate all tables under database

```sql
select * from sys.tables
```

##### locate schema names within table names
```sql
select s.name as 'Scheme name', t.name as 'Table name'
from sys.tables as t
join sys.schemas as s
	on t.schema_id = s.schema_id
```

###### to see the table parameters and specifications:
```sql
sp_help 'table_name'
```

##### percentage vs underscore 
percentage ("%") means match any sub-string of 0 or more characters
underscore ("_") means match any one character 

##### order by DESC vs ASC

DESC keyword means descending and ASC means ascending
 The ORDER BY keyword sorts the records in ascending (ASC) order by default. 

##### drop vs delete
```sql
DROP TABLE table_name -- completely removing a table
```
```sql
DELETE FROM table_name -- deleting all rows of a table
```
 
##### entity integrity
 
entity integrity = primary keys
For example, if a table has a primary key then table exhibit entity integrity because each parameter_one (let's considerer as ID) value is unique and there are no NULLs. Where the unique value requirement prohibits a null primary key value, because nulls are not unique.

##### referential integrity
referential integrity = foreign keys
For example, if a table has a foreign key then table exhibits referential integrity because each parameter_one value in table_one points to an existing parameter_two value in table_two.
Foreign key value has a match in the corresponding table.
 
###### pull out data from two different tables into one single SELECT

```sql
Select t1.B1 as 'Column One', t2.B2 as 'Column Two'
From
(select param_1 as B1 from table_name where param_2 = value_1) as t1,
(select param_2 as B2 from table_name_two where param_3 = value_2) as t2
```
OR
```sql
Select (select param_1 as B1 from table_name where param_2 = value_1)  as 'Column One', (select param_2 as B2 from table_name_two where param_3 = value_2) as 'Column Two'
```

###### to start transaction
```sql
begin transaction
-- OR
begin tran

-- rollback
-- commit
```

###### check transaction status (returned value indicates the total number of the opened transactions)
```sql
select @@TRANCOUNT
```

###### check transaction status (advanced)
```sql
dbcc opentran
-- to check the user who has open transaction:
sp_who2
```

###### select IF condition
```sql
IF EXISTS(SELECT * from table_name)
	PRINT 'Positive'
ELSE
	PRINT 'Negative'
```

###### using a common table expression (CTE) | locating duplicates
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

###### create sequence - partition each record (rows) with the incremented number
```sql
CREATE SEQUENCE sequence_name AS int
START WITH 1 -- start with 1
INCREMENT BY 1
--  INCREMENT BY -1 -- counts into negative numbers by one every time
MINVALUE 1 -- start again from 1 
MAXVALUE 10 -- after it reaches 10
CYCLE -- repeat until it assigns partition number for each record in the table_name table 
UPDATE table_name SET param_1 = NEXT VALUE FOR sequence_name
DROP SEQUENCE sequence_name
```

