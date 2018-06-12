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
resut = [];
for (counter = 0; counter < inputArray.length; counter++){
	transformed = [
inputArray[counter].charAt(0).toUpperCase(),
inputArray[counter].substring(1)
].join("");
result.push(transformed);
}
}

document.getElementById("main_button").onClick = getText();
