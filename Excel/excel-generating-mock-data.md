# Excel: Generating Mock Data

## generate an email addresses

```vbnet
="user"&TEXT(ROW(), "000")&"@email.com"
```
Note: Row() outputs current/active row number.
With this method you do not need to create an extra column with incremented value on each row. It also saves you time as you do not need to copy&paste generated text as values and remove an extra inserted column with incremented values. 

## generate a random number of 14 character length 

```vbnet
=RIGHT(RAND(), 14)
```

## generates a random whole number between specified two boundaries.

```vbnet
=RANDBETWEEN(1,99)
```

## generate a random number between two numbers

#### where 5 is the minimum and 250 is the maximum
```vbnet
=INT(RAND()*(250-100)+5)
```

#### where 5 is the minimum and 25 is the maximum
```vbnet
=INT(RAND()*(25)+5)
```

## generate a random National Insurance Number (NI)

```vbnet
=CHAR(RANDBETWEEN(65,90)) & CHAR(RANDBETWEEN(65,90)) & " " & TEXT(RANDBETWEEN(0,99), "00")  & " " & TEXT(RANDBETWEEN(0,99), "00")  & " " & TEXT(RANDBETWEEN(0,99), "00")  & " " & CHAR(RANDBETWEEN(65,90))
```







