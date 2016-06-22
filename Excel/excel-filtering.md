# excel

## filter (filtering)


#### move records from the column A to the column B (filter is on)
NOTE: the simple copy-paste will not work on the filtered data as it would fail to move only filtered data.

+----------------+	+----------------+
|   | BEFORE |   |	|   | AFTER |    |
+----------------+	+----------------+

+---+--------+---+	+---+-------+----+
|   | A      | B |	|   | A     | B  |
+---+--------+---+	+---+-------+----+
| 1 | 10     | 0 |	| 1 | 0     | 10 |
+---+--------+---+	+---+-------+----+
| 2 | 11     | 0 |	| 2 | 0     | 11 |
+---+--------+---+	+---+-------+----+

```vbnet
step 1. select columns K and R by: Shift + Right-Arrow -> by holding Shift press CTRL + Down-Arrow 

step 2. we will need to select only visible filtered cells, by pressing:
Alt + ; (semi-colon)

step 3. under Excel -> HOME tab -> Fill -> Right or shortcut: CTRL + R

step 4. to set column A with zeros: select column A by: CTRL + Alt + Down-Arrow -> type 0 under formula box -> confirm by CTRL + Enter
```