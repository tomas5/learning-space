# Excel: Date Formats

## using CONCATENATE function to allow us to combine text from different cells into one cell:

```vbnet
=CONCATENATE(A1,"/",$B2,"-",C$3," ", "end-of-the-text")
```


## get data in the specific format:

```vbnet
=TEXT(A1,"yyyy-mm")
```


## get data in the specific format including own separators:

```vbnet
=YEAR(A1) & "-" & MONTH(A1) & "-" & DAY(A1)
```


## to return the last day of the month:

```vbnet
=NOW()
/*
EOMONTH(start_date, months)
months = the number of months before or after start_date. A positive value for months yields a future date; a negative value yields a past date.
*/
=EOMONTH(A1, 0)
```


## get the last month date:

```vbnet
=TEXT(EDATE(TODAY(),-1),"yyyy-mm")
```


## to validate date format:

```vbnet
=IF(NOT(ISERROR(DATEVALUE(TEXT(J3,"mm/dd/yyyy")))),"Valid date","Invalid date")
```


## convert dateformat from '31122016' to '2016-12-31

[Split text among columns by using functions](https://support.office.com/en-gb/article/Split-text-among-columns-by-using-functions-389f665d-ec1a-4271-9c5a-c35280be795d)

```vbnet
=CLEAN("'" & RIGHT(G2, 4)  & "-" & MID(G2, 3, 2) &  "-" & LEFT(G2, 2 ) & "'")
```