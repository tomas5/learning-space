/*

We have two tables: List1 and List2.
Write a program to ouptut all values which are not in second list.

--------   --------    -------- 
|List 1|   |List 2|    |Output|
--------   --------    --------
|   A  |   |   A  |    |   B  |
|   B  |   |   D  |    --------
|   C  |   |   C  | 
--------   -------- 

*/

// Step 1.
// The simplest method to output something from lists is to use a "For" loop, for example:

var list1 = ['A', 'B', 'C'];
var list2 = ['A', 'D', 'C'];
var output =[];

for(i=0; i<list1.length; i++) {
    for(n=0; n< list2.length; n++) {
        if (list1[i] == list2[n])
           output.push(list1[i]);
    }
}
window.alert(output);
// However, this solution doesn't solve the current problem
// as we are returning all items which are included on both lists.


// Step 2.
// Since we used push() method to add items to an array, we will use splice() method
// to remove items from an array and return left item(s)

var index; // variable to store the index value of the array's item

for (var i=0; i<list2.length; i++) {
    index = list1.indexOf(list2[i]);
    if (index > -1) { // if the index is equal to "-1" then the array's item doesn't exist
        list1.splice(index, 1); // if value exist in second list remove that value from the first list
    }
}

// more information:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// or
// http://www.w3schools.com/jsref/jsref_splice.asp
window.alert(list1);


// Step 3.
// Considering that we don't want to remove items from real array, we may create a clone of it.
// So we are going to use slice() method to return the selected elements in an array, as a new array object.
// more information:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// or
// http://www.w3schools.com/jsref/jsref_slice_array.asp

var output = list1.slice(0);
for (var m = 0, index; m < list2.length; m++) {
    index = output.indexOf(list2[m]);
    if (index > -1) {
    	output.splice(index, 1);
    } 
}
window.alert(output);