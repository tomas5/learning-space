# t-sql

## cursor

###### example
```sql
DECLARE vend_cursor CURSOR  
    FOR SELECT * FROM Purchasing.Vendor  
OPEN vend_cursor  
FETCH NEXT FROM vend_cursor;  
```

(DECLARE CURSOR - Transact-SQL)[https://msdn.microsoft.com/en-us/library/ms180169.aspx]

https://sqlwithmanoj.com/2010/10/24/sql-server-cursor-life-cycle/

https://www.mssqltips.com/sqlservertip/1599/sql-server-cursor-example/

http://www.aspsnippets.com/Articles/Using-Cursor-in-SQL-Server-Stored-Procedure-with-example.aspx


Your application contains a stored procedure for each country. Each stored procedure accepts an employee
identification number through the @EmpID parameter. You plan to build a single process for each
employee that will execute the stored procedure based on the country of residence. Which approach should
you use?