var result;
function getText(){
   var someText = prompt ("cap me");
   capWords(someText);
alert(result.join(" "));
}

function capWords(input) {
var counter;
var inputArray = input.split(" ");
var transformed = "";
result = [];
for (counter = 0; counter < inputArray.length; counter++){
	transformed = [
inputArray[counter].charAt(0).toUpperCase(),
inputArray[counter].substring(1)
].join("");
result.push(transformed);
}
}

document.getElementById("main_button").onClick = getText();




// functional
(function () {
"use strict";
var SomeText = function (text) {
this.text=text;
};
SomeText.prototype.capify = function(str){
var firstLetter = str.charAt(0);
var remainer = str.substring(1);
return [firstLetter.toUpperCase(), remainder].join("");
};
SomeText.prototype.capifyWords = function (){
var result = [];
var textArray = this.text.split(" ");
for (var counter = 0; counter < textArray.length; counter++) {
result.push(this.capify(textArray[counter]));
}
return result.join(" ");
}

document.getElementById("main_button").addEventListening("click", function(e){
var something = prompt("Enter your string");
var newText = new SomeText(something);
alert(newText.capifyWorlds());
})
}());
