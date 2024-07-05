let result;
function greet() {
    let nombreUsuario=prompt("¿Cuál es su nombre?");
    alert(`Bienvenido ${nombreUsuario}!`);
    return;
}

function duplicateNumber() {
    result=parseInt(document.getElementById(`numberToMultiply`).value)*2;
    return alert(`The result is ${result}`);
}

function changeText(elementById, text) {
    return document.getElementById(elementById).innerHTML=text;
}

changeText("addFunctionDescription","Add a number for duplicate");
changeText("duplicate","duplicate");
greet();

