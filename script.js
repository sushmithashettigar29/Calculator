let calcValue = document.getElementById("calc");
function clearDisplay() {
  calcValue.value = " ";
}

function clearOneElement(){
    calcValue.value = calcValue.value.toString().slice(0,-1);
}

function appendToDisplay(value) {
  calcValue.value += value;
}

function calculateResul() {
  try {
    calcValue.value = eval(calcValue.value);
  } catch (error) {
    calcValue.value = "Error";
  }
}
