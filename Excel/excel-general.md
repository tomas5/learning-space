# Excel: General

## to get a value from the specified sheet and cell ($ =  a fixed cell reference; $ sign shortcut:  F4):

```vbnet
=Sheet1!$A$1
```

NOTE: you may use the single quotes for sheet name, for example ='Sheet 2'!$A$1

## copy text without begin and end quotes:
```vbnet
=CLEAN( "INSERT INTO table () VALUES ('" & A1 & "', '" & B1 & "')" )

=CLEAN( "SELECT * FROM table WHERE id LIKE '%" & A1 & "%'" )

=CLEAN( "UNION ALL SELECT * FROM table WHERE id = '" & A1 & "' " )

=CLEAN("SELECT * FROM table WHERE id = "&IF(A1="","NULL","'"&A1&"'"))
```

## to print current name
note: this example uses -1 column representation, meaning applied formula under B1 will print: 'Column A'
```vbnet
=CLEAN("Column " & LEFT(ADDRESS(1,COLUMN()-1,4),LEN(ADDRESS(1,COLUMN(),4))-1))
```

## to create a custom drop-down list

```vbnet
DATA tab > Data Validation button > under Settings tab > under Validation Criteria section > from Allow > select List > under Source: > type =list_name
```

## to select every second row (using the modulo function: MOD)
```vbnet
=MOD(ROW(A1),2)

/*
Expand a cell formula over the whole set (the column).
This will give you an alternating sequence of 0 and 1.
[OPTIONAL] Auto-filter and select only the 0s (or the 1s), then hit delete.
*/
```





