# T-SQL: Loop

## Looping through an array (using arraylist principle) of known values to insert records into database

```sql
/*
 * https://msdn.microsoft.com/en-us/library/ms190324.aspx
 *
 * U = Table (user-defined)
 *
 */

IF OBJECT_ID (N'table_name', N'U') IS NOT NULL  
	DROP TABLE table_name;  

create table table_name
(
	primaryParam1 int not null
	,sequenceParam1 int not null
	,rangeParam1 int not null
	,rangeParam2 int not null
	,valueParam1 numeric(9,2) not null
	,effectiveDateParam1 datetime not null
	,endDateParam1 datetime null
)

declare @tempList1 nvarchar(max)
select @tempList1 = '100,200,300'

declare @position int
		,@nextPosition int
		,@valueLength int
select	@position = 0		-- start_location
		,@nextPosition = 1

declare @currentList1Value int

declare @sequanceNumber int
select	@sequanceNumber = 1

while @nextPosition > 0
	begin
							-- CHARINDEX ( expressionToFind , expressionToSearch [ , start_location ] )
							-- if [ , start_location ] exceeds expressionToFind length it will return 0
		select @nextPosition = charindex(',', @tempList1, @position + 1)
		print 'next position: ' + convert(nvarchar(15),@nextPosition)
		/* to count value length there are two ways:  using case or if statement */
		--select @valueLength = case
		--						when @nextPosition > 0 then @nextPosition
		--						else len(@tempListOfAges) + 1
		--					  end - @position - 1
		select @valueLength = IIF(@nextPosition > 0, @nextPosition, len(@tempList1) + 1) - @position - 1
		
											-- SUBSTRING ( expression ,start , length )  
		select @currentList1Value = convert(int, substring(@tempList1, @position + 1, @valueLength))

												
		insert into table_name values
			--	primaryParam1, sequenceParam1, rangeParam1, rangeParam2, valueParam1, effectiveDateParam1, endDateParam1
			(1, @sequanceNumber, @currentList1Value, @currentList1Value + 1, @currentList1Value/10, GETDATE(), NULL)

		select @sequanceNumber +=1
		select @position = @nextPosition				
	end

select * from table_name
```
