# T-SQL (Transact-SQL)

#### user permissions

##### Trustworthy set to ON

The TRUSTWORTHY database property is used to indicate whether the instance of SQL Server trusts the database and the contents within it. By default, this setting is OFF, but can be set to ON by using the ALTER DATABASE statement. For example:
```sql
 ALTER DATABASE AdventureWorks2012 SET TRUSTWORTHY ON;
```

You administer a Microsoft SQL Server 2012 database that has Trustworthy set to On. You create a stored procedure that returns
database-level information from Dynamic Management Views. You grant User1 access to execute the stored procedure. You need to
ensure that the stored procedure returns the required information when User1 executes the stored procedure. You need to achieve
this goal by granting the minimum permissions required. What should you do? (Each correct answer presents a complete solution.
Choose all that apply.)


##### Grant the sysadmin role on the database to User1.
##### Grant the db_owner role on the database to User1.

also possible answer:
Modify the stored procedure to include the EXECUTE AS OWNER statement. Grant VIEW SERVER STATE permissions to the
owner of the stored procedure.

```sql
select * from sys.databases
```
