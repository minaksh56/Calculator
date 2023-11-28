
let result = document.getElementById("result");
function display(number) {
    result.value += number;
}
function calculator() {
    let finalNumber = result.value;
    let finalResult = eval(finalNumber);
    result.value = finalResult;
}
function clearDisplay() {
    result.value = "";
}
function deleteLast() {
    result.value = result.value.slice(0, -1);
}



