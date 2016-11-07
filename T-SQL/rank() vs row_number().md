# t-sql

## rank

###### simple example to return a list of products from Sales.ProductCatalog created table

```sql
if object_id('Sales') is not null
	drop schema Sales
go
create schema Sales;
go

if object_id('Sales.ProductCatalog') is not null
	drop table Sales.ProductCatalog
go
create table Sales.ProductCatalog
(
	CatID int not null
	,CatName varchar(25) not null
	,ProductID int not null primary key
	,ProdName varchar(25) not null
	,UnitPrice numeric(9,2) not null
)
go
insert Sales.ProductCatalog values
	(1, 'Sweets', 10, 'Candy', 100.10)
	,(2, 'Vegetables', 20, 'Tomato', 0.555)
	,(3, 'Fruits', 30, 'Orange', 1.01)
	,(4, 'Fruits', 40, 'Strawberry', 0.99)


select * from Sales.ProductCatalog


select ProductCatalog.CatID, -- using two-part names to reference the Sales.ProductCatalog table
ProductCatalog.CatName,
ProductCatalog.ProductID,
ProductCatalog.ProdName,
ProductCatalog.UnitPrice,
RANK() OVER (order by ProductCatalog.UnitPrice desc) -- use the RANK function to return the ranking of UnitPrice rows
as PriceRank  -- the column will be named PriceRank
from Sales.ProductCatalog
order by ProductCatalog.UnitPrice desc -- UnitPrice column will be returned in descending order
```

###### rank() vs row_number()

```sql
use AdventureWorks2012

/*
 * rank() assigns a unique number for each row starting with 1,
 * except for rows that have duplicate values,
 * in which case the same ranking is assigned
 * and a gap appears in the sequence for each duplicate ranking.
 */

select rank() over (order by UnitPrice) as PriceRank, *
from sales.SalesOrderDetail


/*
 * row_number() returns a unique number for each row starting with 1.
 * For rows that have duplicate values, numbers are arbitrarily assigned.
 */

select row_number() over (order by UnitPrice) as PriceRank, *
from sales.SalesOrderDetail
```


