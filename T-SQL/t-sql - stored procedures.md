# T-SQL: Stored Procedures

## create a temporary table for stored procedure
```sql
drop table Products
create table Products (productID int, productQty int, productCost numeric(9,2))
insert Products values (1,10,9.99), (2,25,59.99), (3,40,99.99)
-- select * from Products
go
```

## create a stored procedure
```sql
drop procedure GetCostPerUnit
go
create procedure GetCostPerUnit
	@ProductID int, 		-- single input parameter
	@UnitCost numeric(9,2) output 	-- return a single integer
as
	set nocount on
	select @UnitCost = productCost/productQty
	from Products
	where productID = @ProductID
return
go
```

## call a stored procedure

```sql
-- declare the variable to receive the output value of the procedure.
declare @UnitCost numeric(9,2)
-- execute the procedure specifying the ID for the input parameter
-- and saving the output value in the variable @UnitCost
execute GetCostPerUnit 2, @UnitCost output
-- display the value returned by the procedure:
select @UnitCost as 'Unit Cost'
go
```

## another example of calling a stored procedure
```sql
-- declare the variable to receive the output value of the procedure.
declare @UnitCostByProduct numeric(9,2)
-- execute the procedure specifying the ID for the input parameter
-- and saving the output value in the variable @UnitCostByProduct 
execute GetCostPerUnit @ProductID = 2,  @UnitCost = @UnitCostByProduct output
-- display the value returned by the procedure:
select @UnitCostByProduct as 'Unit Cost'
go
```