# excel

## IF...ELSE statements

#### IF statement with ISBLANK() condition:
```vbnet
=IF(ISBLANK(A1), "Column A is blank", "Column A is not blank")

=IF(NOT(ISBLANK(A1)), "Column A is not blank", "Column A is blank")
```

#### IF statement to locate a cell with space
```vbnet
=IF(COUNTIF(A1,"* *"),"Yes","No")
```

#### IF statement to search if column contains specified cell value:
```vbnet
=IF(COUNTIF($A:$A,B1),"True","False")

=COUNTIF(Sheet1!$A:$A,Sheet1!B1)=0

=VLOOKUP(A:A,B1,1,FALSE)
```

#### IF statement with multi-condition: to search if column contains specified cell value (and if specified cell is not blank):
```vbnet
=IF((COUNTIF('Sheet1'!$A:$A,B1)=0), NOT(ISBLANK(B1)))
```

#### IF statement with multi-condition:
```vbnet
=IF(AND(AND(A2=B2, C2="Delta"), AND(B2=0, NOT(C2=0))), "Positive", "Negative")

=IF(OR(A1="", B1 ="",C1="",D1="",E1=""), "Empty cells", "Not empty cells")

=IF(OR(A1<>"", B1 <>"",C1<>"",D1<>"",E1<>""), "Selected range contains some values", "this IF condition is incorrect to determine the output message")
```


#### IF statement with multi-condition:

=IF(F2=F1, (IF(CONCATENATE(G2,H2)=CONCATENATE(G1,H1), "true", "false")), "-")