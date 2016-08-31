# t-sql

## logging

###### using OUTPUT clause for logging each row affected by an INSERT, UPDATE, DELETE, or MERGE statement

(OUTPUT Clause)[https://msdn.microsoft.com/en-us/library/ms177564.aspx]

```sql
create table table_of_items
(
	item_code int not null primary key,
	item_price numeric(10, 2),
	effective_date datetime default getdate()
)
create table items_price_log
(
	item_code int not null,
	old_item_price numeric(10,2),
	new_item_price numeric(10,2),
	effective_date datetime default getdate()
)
insert into table_of_items (item_code, item_price) values
	(1, 10.10)
	,(2, 20.20)
	,(3, 30.30)

update table_of_items
set item_price = item_price * 1.10,
	effective_date = GETDATE()
output inserted.item_code, deleted.item_price, inserted.item_price
-- into items_price_log
-- optional: specifying table attributes
into items_price_log (item_code, old_item_price, new_item_price)

select * from table_of_items
select * from items_price_log
```
