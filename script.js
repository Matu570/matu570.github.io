let nombreUsuario;
let result;
let alturaUsuario;
let pesoUsuario;

function greet() {
    nombreUsuario=prompt("¿Cuál es su nombre?");
    alert(`Bienvenido ${nombreUsuario}!`);
    return;
}

function changeText(elementById, text) {
    return document.getElementById(elementById).innerHTML=text;
}

function duplicateNumber() {
    result=parseInt(document.getElementById(`numberToMultiply`).value)*2;
    return alert(`The result is ${result}`);
}

function imcStart() {
    changeText(`imcCalculator`,`${nombreUsuario}, por favor, ingresa tu altura`);
    document.getElementById(`imcInput`).removeAttribute("hidden");
    changeText("addButtonImc", "Enter")
}

function addData(){
    if (alturaUsuario==undefined) {
        alturaUsuario=parseInt(document.getElementById("imcInput").value)
        changeText(`imcCalculator`,`${nombreUsuario}, por favor, ingresa tu peso`)
        document.getElementById("imcInput").value=``;
    }else {
        pesoUsuario=parseInt(document.getElementById("imcInput").value);
        document.getElementById("imcInput").value=``;
    }
    if(alturaUsuario!=undefined&&pesoUsuario!=undefined){
        changeText(`imcCalculator`,`${nombreUsuario}, your IMC is ${pesoUsuario/Math.pow(alturaUsuario,2)}`)
    }
    return;
}
changeText("addFunctionDescription","Add a number for duplicate");
changeText("duplicate","duplicate");
greet();
changeText(`imcCalculator`,`Calcular mi IMC`);


