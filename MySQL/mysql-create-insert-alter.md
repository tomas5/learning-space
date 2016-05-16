# mysql

## create/insert/alter/update

```sql
CREATE TABLE table_name (parameter_name_one VARCHAR(25), parameter_name_two VARCHAR(25));

insert into table_name() values ('1',  '001'), ('2',  '002'), ('3', '003');

ALTER TABLE table_name
ADD COLUMN `parameter_name_three` INT NOT NULL AUTO_INCREMENT FIRST,
ADD PRIMARY KEY (`parameter_name_three`);

ALTER TABLE table_name
ADD COLUMN `parameter_name_four` VARCHAR(50) NULL;

update table_name
set parameter_name_four = 'abc'
where parameter_name_one in (1, 2);
```

#### INSERT statement addition, in case we have an existing record:
```sql
 ON DUPLICATE KEY
    UPDATE `table_name`.column_name=`table_name`.column_name;
```


