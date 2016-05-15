/*
In Excel (Spreadsheet) we have columns which start and continue in the alphabetical order.
The first column starts with letter "A" goes forward to letter "Z" and then continue with "AA", "AB", ... "AAA" etc.
Write a program to output an index of the selected (letter) column, for example:
B = 2
Z = 26
AA = 27
AB = 28
*/

function alphabetToNumeric(str) {
  str = str.toUpperCase(); // ASCII printable characters only
  var sum = 0;
  for (var i=0; i < str.length; i++) {
      sum = sum * 26 + str.charCodeAt(i) - 64; //returns 1 for 'A', 2 for 'B' etc.
  }
  return sum;
}
// window.alert(alphabetToNumeric("z"));
// console.log("alphabetToNumeric: " + alphabetToNumeric("z"));


// Reverse action:

function convertToNumberingScheme(number) {
  var baseChar = ("A").charCodeAt(0),
      letters  = "";
  do {
    number -= 1;
    letters = String.fromCharCode(baseChar + (number % 26)) + letters;
    number = (number / 26) >> 0;
  } while(number > 0);
  return(letters);
}
// window.alert(convertToNumberingScheme(26));
// console.log("convertToNumberingScheme: " + convertToNumberingScheme(26));