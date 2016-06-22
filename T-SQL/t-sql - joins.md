# t-sql tables

## joins

##### consider that you have two tables named Customers and Orders, where tables are related by a column named CustomerID. And you need to return the CustomerName for all customers and the OrderDate for any orders that they have placed as well as including customers who have not placed any orders.

```sql
select CustomerName, OrderDate
from Customers as c
left join Orders as o
	on c.CustomerID = c.CustomerID
	
/* 
 * alternatively you may use a full-length query: 
 */
 
select CustomerName, OrderDate
from Customers
left outer join Orders
	on Customers.CustomerID = Orders.CustomerID
```


##### ...
```sql

```