# mysql

## transactions

```sql
START TRANSACTION;

COMMIT;
ROLLBACK;
```

#### to disable auto-commit mode explicitly, use the following statement:
```sql
select @@autocommit;
SET autocommit=0;
select @@autocommit;
```

#### to see open transaction / check transaction status

```sql
show engine innodb status
```sql