# T-SQL (Transact-SQL)

## unique identifier

#### using UNIQUEIDENTIFIER with NEWID()

```sql
CREATE TABLE table_name (parameter_one UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(), parameter_two NVARCHAR(50) NOT NULL)
```

##### Columns created with the uniqueidentifier data type store specially formatted 16-byte binary values. Unlike with identity columns, the Database Engine does not automatically generate values for columns with the uniqueidentifier data type. During an insert operation, variables with a data type of uniqueidentifier and string constants in the form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx (36 characters including hyphens, where x is a hexadecimal digit in the range 0-9 or a-f) can be used for uniqueidentifier columns. For example, 6F9619FF-8B86-D011-B42D-00C04FC964FF is a valid value for a uniqueidentifier variable or column. Use the NEWID() function to obtain a globally unique ID (GUID).

#### using UNIQUEIDENTIFIER with ROWGUIDCOL and NEWSEQUENTIALID()

```sql
CREATE TABLE table_name (parameter_one UNIQUEIDENTIFIER ROWGUIDCOL PRIMARY KEY DEFAULT NEWSEQUENTIALID(), parameter_two NVARCHAR(50) NOT NULL)
```

#### UNIQUEIDENTIFIER along with NEWID() vs ROWGUIDCOL NEWSEQUENTIALID()

##### The UNIQUEIDENTIFIER along with ROWGUIDCOL NEWSEQUENTIALID() is far more efficient than normal UNIQUEIDENTIFIER along with NEWID()

##### the unique IDs generated with the second approach are sequential in nature, similar to IDENTITY values.

```sql
CREATE TABLE table_name
(  
 parameter_one int IDENTITY(1,1), -- IDENTITY [ (seed , increment) ]  
 parameter_two varchar (20)
);  
```

#####  there can be max of one ROWGUIDCOL for a table.
```sql
select MAX(parameter_one) from table_name
```
##### you can query the table for ROWGUIDCOL. For example:
```sql
select ROWGUIDCOL from table_name
```
