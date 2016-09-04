# T-SQL: User Permissions

## Trustworthy (Database Property) set to ON

The TRUSTWORTHY database property is used to indicate whether the instance of SQL Server trusts the database and the contents within it.
By default, this setting is OFF, but can be set to ON by using the ALTER DATABASE statement. For example:

```sql
 ALTER DATABASE database_name SET TRUSTWORTHY ON;
```

Trustworthy set to ON allows to have external access. Because a database that is attached to an instance of SQL Server cannot be immediately trusted, the database is not allowed to access resources beyond the scope of the database until the database is explicitly marked trustworthy.

```
NOTE: To set this option, you must be a member of the sysadmin fixed server role.
```

##  granting permissions

Assume the following scenario:

```
You have a stored procedure that returns database-level information from Dynamic Management Views.
You grant user_name access to execute the stored procedure.
You need to ensure that the stored procedure returns the required information when user_name executes the stored procedure.
You need to achieve this goal by granting the minimum permissions required. 
```

To do so, we need to consider two options: 
* Grant the sysadmin role on the database to user_name 
* Grant the db_owner role on the database to user_name 

Since the dbo built-in database schema, which cannot be dropped, is the default database schema for new objects created by users having the db_owner or db_ddl_admin roles - granting db_owner role on the database to user_name will allow minimum permissions.

Since user_name needs to access a stored procedure from views, we need to grant sysadmin role.
Because, the sys database schema is reserved by SQL Server for system objects such as system tables and views.