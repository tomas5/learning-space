# mysql

## pivot table

#### Basic SQL Script
```sql
select t1.param1, t1.param2 as 'number', t1.param3,  t1.param4,
	   t2.param1_description,
	   t2.param2_percentage as 'EE %',
       t2.param3_percentage as 'ER %',
from table_two as t2
join table_one as hf on (t1.param1 = t2.firstcolls_id)
where '2016-01-01' between t2.`from` and t2.`to` and t2.param4_status = 'Active'
and t2.pension_scheme in ('001',  '002')
group by t1.param1;
```

#### MySQL Pivot Table Script 
```sql
select /* t1.param1, */ t1.param2 as 'number', t1.param3,  t1.param4,
	max(IF(pension_scheme = '001', param6_percentage, NULL)) AS 'A param6 %', 
    max(IF(pension_scheme = '002', param7_percentage, NULL)) AS 'B param7 %',
    max(IF(pension_scheme = '003' OR param8_scheme = '000', param6_percentage, NULL)) AS 'Param8 %',
    max(IF(param8_scheme = '004' OR param8_scheme = '000', param7_percentage, NULL)) AS 'Param9 %',
    max(IF(param8_scheme = '005' OR param8_scheme = '000', param6_percentage, NULL)) AS 'Param10 %',
    max(IF(param8_scheme = '006' OR param8_scheme = '000', param7_percentage, NULL)) AS 'Param11%',
	max(IF(param8_scheme = '006', param6_percentage, NULL)) AS 'Param12 %',
	max(IF(param8_scheme = '006', param7_percentage, NULL)) AS 'Param13 %',
    max(IF(param8_scheme in ('007', '008'), param9_pay, NULL)) AS 'Param14 £',
	max(IF(param8_scheme in ('009', '010'), param10_pay, NULL)) AS 'Param15 £',
    max(IF(param8_scheme = '012', 'Yes', 'No')) AS 'Param16%'
from table_two as t2
join table_one as t1 on (t1.param1 = t2.t1.param1)
where '2016-01-01' between t2.`from`
	and t2.`to` and t2.param4_status = 'Active'
	and t2.param5_scheme in ('001',  '002')
group by t1.param1;
```
