# t-sql

## function (UDF - User Defined Function) vs stored procedure (sp)

Function				|		Stored Procedure
_______________________________________________________________________________
Function can return only one value	| SP can return zero, single or 
which is mandatory			| multiple values (any datatype).

Transactions are not allowed in UDF	| We can use transaction in SP

Function can have only input parameter	| SP can have input/output parameter
(up to 1,023 input parameters)		| (up to 21,000 input parameters)

We can use UDF in SELECT/WHERE/HAVING	| SELECT/WHERE/HAVING statement
statement				| is not allowed to be used in SP

We cannot call SP from Function		| Function can be called from SP

We cannot use Try-Catch block in UDF	| We can use exception handling using
					| Try-Catch block in SP

No INSERT/UPDATE statements allowed	| Can perform permanent environmental
					| changes to SQL Server (i.e. 							| INSERT/UPDATE statements are allowed)

Function will be called for each row	| SP can be called directly as a 
returned by the SELECT, for example:	| standalone SQL statement
If table has 100 rows, function is 	|
called for every row in that table	|

Temporary tables cannot be used in UDF	| SP allows temporary tables

Non-deterministic functions cannot	| Non-deterministic functions can be 
be used in UDFs. For example,		| used in stored procedures.
GETDATE() cannot be used in UDFs.	|