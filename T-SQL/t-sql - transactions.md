# t-sql tables

## transactions

###### to start transaction
```sql
begin transaction
-- OR (the short version:)
begin tran

-- rollback
-- commit
```


###### check transaction status (returned value indicates the total number of the opened transactions)
```sql
select @@TRANCOUNT
```

###### check transaction status (advanced)
```sql
dbcc opentran
-- to check the user who has open transaction:
sp_who2
```