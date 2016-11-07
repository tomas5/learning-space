# t-sql tables

## constraints

#### adding constraint

```sql
alter table table_name add constraint constraint_name default 'default_value' 
```

#### removing/dropping constraint

```sql
alter table table_name drop constraint constraint_name 
```

#### getting table constraints

```sql
 SELECT 
    TableName = t.Name,
    ColumnName = c.Name,
    dc.Name,
    dc.definition
FROM sys.tables t
INNER JOIN sys.default_constraints dc ON t.object_id = dc.parent_object_id
INNER JOIN sys.columns c ON dc.parent_object_id = c.object_id AND c.column_id = dc.parent_column_id
ORDER BY t.Name


SELECT 
OBJECT_NAME(OBJECT_ID) AS NameofConstraint
,SCHEMA_NAME(schema_id) AS SchemaName
,OBJECT_NAME(parent_object_id) AS TableName
,type_desc AS ConstraintType
FROM sys.objects
WHERE type_desc LIKE '%CONSTRAINT'
AND OBJECT_NAME(OBJECT_ID)='XYZ'

/*
Constraint Object Types:
	C = CHECK constraint
	D = DEFAULT (constraint or stand-alone)
	F = FOREIGN KEY constraint
	PK = PRIMARY KEY constraint
	R = Rule (old-style, stand-alone)
	UQ = UNIQUE constraint
*/
SELECT * FROM sysobjects WHERE xtype = 'D'
```

#### adding DEFAULT constraint

```sql
-- To add a nullable column with a DEFAULT definition
-- use WITH VALUES to provide values for each existing row in the table.
-- If WITH VALUES is not used, each row has the value NULL in the new column.

ALTER TABLE table_name
ADD column_name datetime NULL  
CONSTRAINT constraint_name
DEFAULT GETDATE() WITH VALUES; 

-- unless we add NOT NULL constraint column, then we can ignore WITH VALUES
ALTER TABLE table_name
ADD column_name datetime NOT NULL  
CONSTRAINT constraint_name
DEFAULT GETDATE() ; 
```