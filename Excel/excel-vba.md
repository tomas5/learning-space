# excel

## VBA (Visual Basic for Applications)

### get and store value of a cell:

Dim cell_value As String
cell_value = Sheets("Sheet1").Range("A1")

### wrap text on/off

http://software-solutions-online.com/excel-vba-wrap-text-onoff/

### clear content of the selected range:

Sheets("Sheet1").Range("A1:A10000").ClearContents

### yes/no message box:

Dim YesOrNoAnswerToMessageBox As String
Dim QuestionToMessageBox As String

QuestionToMessageBox = "This will remove existing generated scripts. Do you want to continue?"

YesOrNoAnswerToMessageBox = MsgBox(QuestionToMessageBox, vbYesNo, "Clear Data Warning")

If YesOrNoAnswerToMessageBox = vbYes Then
	'#######    true execution   #######
Else 'ElseIf YesOrNoAnswerToMessageBox = vbNo Then
	'#######    false execution   #######
End
End If

### to stop execution of the macro:

Exit Sub

### while loop to the column:

Dim rowcount As Integer
Dim generatedScriptOne As String
generatedScriptOne = "begin transaction " _
									& "SELECT * FROM table_name WHERE id in (...)"

 '############    BEGINNING OF THE LOOP    ############
Do While Sheets("Sheet1").Range("A2").Offset(rowcount, 0) <> ""

	generatedScriptOne = generatedScriptOne &  Sheets("Sheet1").Range("A2").Offset(rowcount, 0)
	
	rowcount = rowcount + 1
Loop
'################  END OF THE LOOP  ###############

generatedScriptOne = generatedScriptOne & " --rollback " _
									& " --commit "
Sheets("Sheet1").Range("B1") = generatedScriptOne

### while loop to the row:

'Clear generated script before generating new:
Sheets("Sheet1").Range("B1:AAA1").ClearContents

 '############    BEGINNING OF THE LOOP    ############
Do While Sheets("Sheet1").Range("B1").Offset(0, rowcount) <> ""
	generatedScriptTwo = Sheets("Sheet1").Range("B1").Offset(0, rowcount)
   
	If generatedScriptTwo <> "your_condition" Then
		output1 = output1 & ", table1." & generatedScriptTwo
	Else
		output1 = output1 & ", " & generatedScriptTwo
	End If

	rowcount = rowcount + 1
Loop
'################  END OF THE LOOP  ###############


### group box:

Sub GroupBox9_Click()
End Sub

### group box with option buttons:
Public obValue1 As Long
Public obValue2, obValue3 As Long

Sub GroupBox10_Click()
    obValue1 = ActiveSheet.Shapes("Option Button 10").ControlFormat.Value
    obValue2 = ActiveSheet.Shapes("Option Button 11").ControlFormat.Value
    obValue3 = ActiveSheet.Shapes("Option Button 12").ControlFormat.Value
End Sub

Dim output1 As String
    output1 = ""
	
Sub Action_Button_Click()
	If obValue1 = 1 Then
        output1 = "your_condition"
    ElseIf obValue2 = 1 Then
        output1 = "your_condition_two"
    End If
	
	Sheets("Sheet1").Range("D20") = output1
End Sub