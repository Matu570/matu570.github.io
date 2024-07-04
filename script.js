let numeroIngresado;
function greet() {
    let nombreUsuario=prompt("¿Cuál es su nombre?");
    alert(`Bienvenido ${nombreUsuario}!`);
    return;
}

function duplicateNumber() {
    return console.log(4)
}

function changeText(elementById, text) {
    return document.getElementById(elementById).innerHTML=text;
}

changeText("addFunctionDescription","Add a number for duplicate");
changeText("duplicate","duplicate");
greet();


