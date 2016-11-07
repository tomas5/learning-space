# T-SQL: SET vs SELECT

## performance

(SET versus SELECT when assigning variables)[http://stackoverflow.com/questions/3945361/set-versus-select-when-assigning-variables]


## examples

```sql
DROP TABLE t1
GO
CREATE TABLE t1 (id TINYINT)
GO
INSERT INTO t1 VALUES (1),(2),(3),(4),(5),(6),(7),(8),(9) 
GO

declare @var nvarchar(255)
set @var = 0
set @var = (select id from t1 where id = 10)
select @var /* @var is now NULL */
GO

declare @var nvarchar(255)
set @var = 0
select @var = (select id from t1 where id = 10)
select @var /* @var is still equal to 0 */
GO
```
