let nombreUsuario;
let result;
let alturaUsuario;
let pesoUsuario;
function greet() {
    nombreUsuario=prompt("¿Cuál es su nombre?");
    alert(`Bienvenido ${nombreUsuario}!`);
    return;
}
function addData(){
    return alturaUsuario==undefined?alturaUsuario=parseInt(document.getElementById("imcInput").value):pesoUsuario=parseInt(document.getElementById("imcInput").value);
}

function duplicateNumber() {
    result=parseInt(document.getElementById(`numberToMultiply`).value)*2;
    return alert(`The result is ${result}`);
}

function changeText(elementById, text) {
    return document.getElementById(elementById).innerHTML=text;
}

function imcStart() {
    changeText(`imcCalculator`,`${nombreUsuario}, por favor, ingresa tu altura`);
    document.getElementById(`imcInput`).removeAttribute("hidden");
    changeText("addButtonImc", "Enter")
}

changeText("addFunctionDescription","Add a number for duplicate");
changeText("duplicate","duplicate");
greet();
changeText(`imcCalculator`,`Calcular mi IMC`);


