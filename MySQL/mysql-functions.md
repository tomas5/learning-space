# mysql

## functions

-- to check if function with the specified name already exists in the database:
-- SHOW FUNCTION STATUS where name = 'getPensionablePay';

-- INPUT: (select id from table_name) as param1;
-- OUTPUT: param_2 from (select param1 from table_name where param3 = 'value3') 
DROP function IF EXISTS getPayTaxYtd
DELIMITER $$
CREATE FUNCTION getPayTaxYtd(param1 VARCHAR(50))
RETURNS FLOAT(14,2)
BEGIN
	DECLARE tNumber varchar(25); -- temporary variable
    IF EXISTS (select 1 from table_name where param1 = value_2 and param2 in (select param3 from table_name where `param4` = 'value5'))
	-- if passed value of param1 is not null continue with the calculation
	THEN
			set tNumber = 'value5'; 
			RETURN (select amount_2 from table_name_two where param2 = value4 and param3 = tNumber);
		ELSE
			RETURN NULL; -- 'not in the PayTaxYtd';
		END IF;
END$$
DELIMITER

-- INPUT: (select id from hub_firstcolls) as param1;
-- OUTPUT: pay tax ytd (ER 5%) 
DROP function IF EXISTS getPayTaxYtdEr5Pct
DELIMITER $$
CREATE FUNCTION getPayTaxYtdEr5Pct(param1 VARCHAR(50))
RETURNS FLOAT(14,2)
BEGIN
	DECLARE tNumber varchar(25); -- temporary variable of pay number
    IF EXISTS (select 1 from table_name_pensions where param_1 = value3 and param3 in (select param4 from table_name where `param5` = 'ER 5%'))
	-- if passed value of param4 is not null continue with the pay calculation
	THEN
		set tNumber = '256'; -- 'ER 5%'
		RETURN (select param5 from table_name where param_1 = value3 and param7 = tNumber);
	ELSE
		RETURN NULL; -- 'not in the getPayTaxYtdEr5Pct';
	END IF;
END$$
DELIMITER