# excel

## IF...ELSE statements

### IF statement with ISBLANK() condition:

=IF(ISBLANK(A1), "Column A is blank", "Column A is not blank")

=IF(NOT(ISBLANK(A1)), "Column A is not blank", "Column A is blank")

### IF statement to locate a cell with space

=IF(COUNTIF(A1,"* *"),"Yes","No")

### IF statement to search if column contains specified cell value:

=IF(COUNTIF($A:$A,B1),"True","False")

=COUNTIF(Sheet1!$A:$A,Sheet1!B1)=0

=VLOOKUP(A:A,B1,1,FALSE)

### IF statement with multi-condition: to search if column contains specified cell value (and if specified cell is not blank):

=IF((COUNTIF('Sheet1'!$A:$A,B1)=0), NOT(ISBLANK(B1)))

### IF statement with multi-condition: to search if column contains specified cell value (and if specified cell is not blank):