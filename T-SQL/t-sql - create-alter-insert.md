# t-sql: create / alter / insert table

## creating table

```sql
CREATE TABLE table_name (
	paramID int NOT NULL PRIMARY KEY,
	param_2 int NOT NULL,
	param_3 int NULL,	-- if the column can take NULL as a value, the column is defined with an explicit DEFAULT NULL clause
	param_4 nvarchar(25)	-- if neither NULL nor NOT NULL is specified, the column is treated as though NULL had been specified
)
```

## adding a new column / alter
```sql
ALTER TABLE table_name ADD param_5 VARCHAR(25) NULL
```

## adding a computed column that returns the sum total of the param_2 and param_3 values for each row

```sql
ALTER TABLE table_name ADD param_6 AS param_2 + param_3
```

## adding a computed column that returns the sum total and able to index the column (write the results to a disk)

```sql
-- round brackets are optional
ALTER TABLE table_name ADD param_7 AS (param_2 + param_3) PERSISTED
```

## insert data

```sql
INSERT INTO table_name VALUES (NEWID(), 1), (NEWID(), 2), (NEWID(), 3)
-- keyword: "INTO" is not compulsary:
INSERT table_name (parameter_two) VALUES (1), (2), (3)
-- specifying parameters:
INSERT INTO table_name (parameter_two) VALUES (1), (2), (3)
```

## insert data (alternative)

```sql
INSERT INTO table_name SELECT NEWID(), 1 UNION SELECT NEWID(), 2 UNION SELECT NEWID(), 3
-- use another table's data:
INSERT INTO table_one SELECT 1, t2.parameter_two from table_two as t2 where t2.parameter_one = 1
```

## insert randomly generated data

```sql
DROP TABLE Orders
DROP TABLE Customers
CREATE TABLE Customers
(
	CustomerId int primary key
	,CustomerName nvarchar(25)
)
CREATE TABLE Orders
(
	OrderId int primary key
	,CustomerId int
	,OrderDate datetime
	,constraint FK_CustomerId foreign key (CustomerId)
		references Customers (CustomerId)
		on delete cascade
		on update cascade
)

-- Create random records
-- SET can only assign one variable at a time, SELECT can make multiple assignments at once.
DECLARE @counter int
		,@max int
		,@randomCustomerId int

SET @counter = 1
SET @max = 10 -- generate 10 records

WHILE @counter <= @max
	BEGIN
		/*********** Generate Random String ***********/
		DECLARE @chars nvarchar(50)
		,@charsLength int
		,@randomString nvarchar(10)
		,@stringCounter int

		SET @chars = 
		'abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ'
		SET @charsLength = Len(@chars)
		SET @stringCounter = 0
		SET @randomString = ''

		WHILE (@stringCounter < 10)
			BEGIN
				select @RandomString = @RandomString + 
										SUBSTRING(@chars, CONVERT(int, RAND() * @charsLength), 1)
				SET @stringCounter += 1
		END
		/*********** End of Generate Random String ***********/

		SET @randomCustomerId = (ABS(CHECKSUM(NEWID())) % 1000) + 1 -- random number between 1-10
			
		INSERT Customers
			SELECT
				@randomCustomerId
				,@randomString

		INSERT Orders
			SELECT
				-- NEWID() - unique string value , uses your pc mac address and some (current )time parameters 
				-- ABS(CHECKSUM(NEWID() -- ABS gives us the positive value
				-- CHECKSUM(NEWID() - hash value, numerical random integer value
				-- % - module
				(ABS(CHECKSUM(NEWID())) % 1000) + 1 -- random number between 1-1000
				,@randomCustomerId
				-- generate random number out of 365 (as days) and add them to the default date: '2015-01-01' 
				,DATEADD(DAY, ABS(CHECKSUM(NEWID()) % 365), '2015-01-01')
				-- 3650 days = 10 years

		SET @counter += 1
	END

-- select * from Customers
-- select * from Orders
SELECT c.CustomerId, c.CustomerName, o.OrderId, o.OrderDate
FROM Customers c
JOIN Orders o
ON c.CustomerId = o.CustomerId
```