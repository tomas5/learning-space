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

#### insert data

```sql
INSERT INTO table_name VALUES (NEWID(), 1), (NEWID(), 2), (NEWID(), 3)
-- keyword: INTO is not compulsary:
INSERT table_name (parameter_two) VALUES (1), (2), (3)
-- specifying parameters:
INSERT INTO table_name (parameter_two) VALUES (1), (2), (3)
```

#### insert data (alternative)

```sql
INSERT INTO table_name SELECT NEWID(), 1 UNION SELECT NEWID(), 2 UNION SELECT NEWID(), 3
-- use another table's data:
INSERT INTO table_one SELECT 1, t2.parameter_two from table_two as t2 where t2.parameter_one = 1
```