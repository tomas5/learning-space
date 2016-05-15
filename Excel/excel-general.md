# excel

#### to get a value from the specified sheet and cell ($ =  a fixed cell reference, $ sign shortcut:  F4):

```vbnet
=Sheet1!$A$1
```

#### copy text without begin and end quotes:
```vbnet
=CLEAN( "INSERT INTO table () VALUES ('" & A1 & "', '" & B1 & "')" )

=CLEAN( "SELECT * FROM table WHERE id LIKE '%" & A1 & "%'" )

=CLEAN( "UNION ALL SELECT * FROM table WHERE id = '" & A1 & "' " )
```
#### to select every second row (using the modulo function: MOD)
```vbnet
=MOD(ROW(A1),2)

/*
Expand a cell formula over the whole set (the column).
This will give you an alternating sequence of 0 and 1.
[OPTIONAL] Auto-filter and select only the 0s (or the 1s), then hit delete.
*/
```





