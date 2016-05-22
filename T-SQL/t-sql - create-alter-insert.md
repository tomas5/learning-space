# t-sql tables

## create / alter / insert

#### creating table

```sql
CREATE TABLE table_name
(paramID int NOT NULL PRIMARY KEY,
param_2 int NOT NULL,
param_3 int NOT NULL)
```

#### adding a new column / alter
```sql
ALTER TABLE table_name ADD param_4 VARCHAR(25) NULL
```

#### adding a computed column that returns the sum total of the param_2 and param_3 values for each row

```sql
ALTER TABLE table_name ADD param_5 AS param_2 + param_3
```

#### adding a computed column that returns the sum total and able to index the column

```sql
ALTER TABLE table_name ADD param_6 AS param_2 + param_3 PERSISTED
```
