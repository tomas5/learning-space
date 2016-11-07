# t-sql tables

## views

#### views can restrict user access to a predetermined set of rows and column of a table. 
Views can help reduce complexity and improve access control.
Views can help maintain database (DB) integrity (e.g. by doing updates via views)
Data integrity by it means, aims to prevent unintentional changes to information.

#### sp_refreshview 

(sp_refreshview)[https://msdn.microsoft.com/en-us/library/ms187821.aspx]
If a view is not created with the SCHEMABINDING clause, sp_refreshview should be run when changes are made to the objects underlying the view that affect the definition of the view.


#### view and trigger
##### Problem: how to allow users to modify data (only specified parameters of a table) by using the view created from the table
##### Solution: create an INSTEAD OF trigger on the view
[Transact-SQL CREATE VIEW](https://msdn.microsoft.com/en-us/library/ms187956.aspx)
[Designing INSTEAD OF Triggers](https://technet.microsoft.com/en-us/library/ms175521.aspx)
[INSTEAD OF INSERT Triggers](https://technet.microsoft.com/en-us/library/ms175089(v=sql.105).aspx)

```sql
CREATE TABLE BaseTable
(
	ID 		int PRIMARY KEY IDENTITY(1,1),
	Color 		nvarchar(10) NOT NULL,
	Material 	nvarchar(10) NOT NULL,
	ComputedCol 	AS (Color + Material)
);
GO

--Create a view that contains all columns from the base table.
CREATE VIEW InsteadView
AS 
SELECT ID, Color, Material, ComputedCol
-- or specify asterisk for all columns ("*")
-- SELECT *
FROM BaseTable;
GO

--Create an INSTEAD OF INSERT trigger on the view.
CREATE TRIGGER InsteadTrigger on InsteadView
INSTEAD OF INSERT
AS
BEGIN
  --Build an INSERT statement ignoring inserted.ID and inserted.ComputedCol
  INSERT INTO BaseTable
       SELECT Color, Material
       FROM inserted
END;
GO

--A correct INSERT statement that skips the ID and ComputedCol columns.
INSERT INTO BaseTable (Color, Material)
       VALUES (N'Red', N'Cloth');

--View the results of the INSERT statement.
SELECT * FROM BaseTable;

--A correct INSERT statement supplying dummy values for the PrimaryKey and ComputedCol columns.
INSERT INTO InsteadView (ID, Color, Material, ComputedCol)
       VALUES (999, N'Blue', N'Plastic', N'XXXXXX')

--However, we can ignore dummy values because ID and ComputedCol columns are automatically assigned:
INSERT INTO InsteadView (Color, Material)
      VALUES ('Blue', N'Plastic')

--View the results of the INSERT statement.
SELECT * FROM InsteadView;
```

#### To improve the performance of the view by persisting data to disk can be achieved by
##### Creating a clustered index on the view. 
```sql
/*
PROBLEM.
You have created a view:
 */
CREATE VIEW vViewName
WITH SCHEMABINDING
AS
SELECT param_1, param_2,  param_1 + param_2 as 'Amount'
FROM table_name
GO

/*
SOLUTION:
 */
 -- Create a clustered index called IX_TableName_Param1_Param2  
-- on the vViewName view using the param_1 and param_2 columns.  
CREATE CLUSTERED INDEX IX_TableName_Param1_Param2   
    ON vViewName (param_1, param_2);  
GO  
```
##### more info about index:
[CREATE INDEX /(Transact-SQL/)](https://msdn.microsoft.com/en-us/library/ms188783.aspx)


##### views with clause
[CREATE VIEW /(Transact-SQL/)](https://msdn.microsoft.com/en-GB/library/ms187956.aspx)

##### a view which uses WITH SCHEMABINDING clause
A view created with the SCHEMABINDING clause cannot be dropped unless that view is dropped or changed so that it no longer has schema binding. 
For a regular view, you can at any point in time drop a table. Obviously, if you do not recreate the table, queries against the view will fail.

Fail of the ALTER TABLE statements on tables that participate in views that have schema binding.

If you schema-bind a view, it can only reference other schema-bound views.

You will not be able to create index on view vName because it uses a LEFT, RIGHT, or FULL OUTER join, and no OUTER joins are allowed in indexed views. Consider using an INNER join instead.

A view must have TWO PART name (format) i.e [Schema].[Object] and it means that all the objects will be in one database (an object cannot reference itself) and you cannot create indexed view across multiple databases.

##### a view which uses WITH VIEW_METADATA clause

WITH VIEW_METADATA will enable SQL Server to give metadata information of view when you try to access it using  DB-Library, ODBC, OLE DB APIs etc. giving properties of view like columns, their datatype etc.

When a view is created by using WITH VIEW_METADATA, all its columns, except a timestamp column, are updatable if the view has INSTEAD OF INSERT or INSTEAD OF UPDATE triggers.







