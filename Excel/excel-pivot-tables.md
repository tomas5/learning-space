# excel: pivot-tables

+-------------------------------+	+-------------------------------+
             BEFORE				    AFTER   	
+-------------------------------+	+-------------------------------+

+---+---+---------+---------+---+	+---+---+---------+----+------+
|   | A | B       | C       | D |	|   | A | B       | C  | D    |
+---+---+---------+---------+---+	+---+---+---------+----+------+
| 1 |   |         |         |   |	| 1 |   |         |    |      |
+---+---+---------+---------+---+	+---+---+---------+----+------+
| 2 |   | column1 | column2 |   |	| 2 |   | column1 | c1 | c1.1 |
+---+---+---------+---------+---+	+---+---+---------+----+------+
| 3 |   | c1      | c2      |   |	| 3 |   | column2 | c2 | c2.1 |
+---+---+---------+---------+---+	+---+---+---------+----+------+
| 4 |   | c1.1    | c2.1    |   |	| 4 |   |         |    |      |
+---+---+---------+---------+---+	+---+---+---------+----+------+

## transfer columns to rows and vice versa

```vbnet
step 1. select B2-D3

step 2. in the Formula bar type:
=TRANSPOSE(B2:C4)

step 3. after typing in the formula use CTRL+SHIFT+ENTER to apply the same formula to all selected cells
```

## output column to rows

```vbnet
=OFFSET($A$1, (COLUMN()), 0)

'leave empty cell if column's cell has no value:
=IF(OFFSET('Sheet_Name'!$A$1,(COLUMN()),0)<>0, OFFSET('Sheet_Name'!$A$1,(COLUMN()),0), "")
```


