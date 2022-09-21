window.onload = function() {
var keys = document.querySelectorAll(".button");
for (let i = 0; i < keys.length; i++) {
 keys[i].onclick= changeInput;
}
}
function changeInput(eventObj){
    value = eventObj.target.value;

    if (value=== "=") {
        document.getElementById("text").innerHTML = eval(document.getElementById("text").innerHTML);
    } else if(value=== "C") {
        document.getElementById("text").innerHTML = "";
    } else{
        document.getElementById("text").innerHTML += value;
    }
}