var currentValue = '';
var result = document.getElementById("result")

function Calculate(x){
    currentValue += x;
    result.value = currentValue;
}
 function CalculateResult(){
     result.value = Function('return ' + currentValue)();
}
function Clear(){
   currentValue = ''
   result.value = currentValue;

}
function Delete(){
   currentValue = currentValue.slice(0, -1);
   result.value = currentValue;
}
function Calculate(x) {
    if (x === '%') {
        currentValue = (Number(currentValue) / 100).toString();
    } else {
        currentValue += x;
    }
    result.value = currentValue;
}
