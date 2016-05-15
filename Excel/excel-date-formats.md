# excel

## date formats

#### using CONCATENATE function to allow us to combine text from different cells into one cell:

```vbnet
=CONCATENATE(A1,"/",$B2,"-",C$3," ", "end-of-the-text")
```

#### get data in the specific format:
```vbnet
=TEXT(J2,"yyyy-mm")
```

#### to return the last day of the month:
```vbnet
=NOW()
/*
EOMONTH(start_date, months)
months = the number of months before or after start_date. A positive value for months yields a future date; a negative value yields a past date.
*/
=EOMONTH(A1, 0)
```
#### get the last month date:
```vbnet
=TEXT(EDATE(TODAY(),-1),"yyyy-mm")
```

#### to validate date format:
```vbnet
=IF(NOT(ISERROR(DATEVALUE(TEXT(J3,"mm/dd/yyyy")))),"Valid date","Invalid date")
```