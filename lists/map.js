// list operation 
//you will see only individual list items to be output in console.log
var listNums = [1,2,3,4];
function doubleIt(listNums) {
return listNums*2;
} 
console.log(doubleIt(listNums[0,1,2,3]));
//output is 8



// list operation 


function doubleIt(v) {
return v*2;
} 

function transform (arr, fn) {
//we want output to be in var list
var list = [];
//we need an empty array

//now we need a for each loop
for (var i=0; i<arr.length; i++){
//arr is 1st parameter, fn is 2nd param
list[i] = fn(arr[i]);
}
return list;
}

console.log(transform([1,2,3,4],doubleIt));


var array1 = [1,2,3,4];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
console.log(array1);




