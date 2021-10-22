let monedas = [
    'Elige tu Moneda',
    'Dolar',
    'Peso Mexicano',
    'Peso Colombiano',
    'Euro',
    'Libra Esterlina'
];

let monedaA = document.getElementById("inputMonedaA").options;
let monedaB = document.getElementById("inputMonedaB").options;


monedas.forEach(moneda=> 
    monedaA.add(
        new Option(moneda)
    ));

monedas.forEach(moneda=>
    monedaB.add(
        new Option(moneda)
    ));

function error() {
    let app = document.querySelector(".content-box");
    if(!document.querySelector(".error")){
        app.insertAdjacentHTML("beforeend", '<p class="error">Por favor, ingrese datos válidos</p>');
    }

}

function removeError() {
    let error = document.querySelector(".error")
    if(document.querySelector(".error")){
        error.remove();
    }
}

function calcular(){
    let cantidadIngresada = Number(document.getElementById("inputCampo").value);
    let opcionA = document.getElementById("inputMonedaA").value;
    let opcionB = document.getElementById("inputMonedaB").value;
    let operador;
    let total;

    let dolar;
    let pesoMexicano;
    let pesoColombiano;
    let euro;
    let libraEsterlina;

    switch(opcionA){
        case "Dolar":
            dolar = 1
            pesoMexicano = 20.3
            pesoColombiano = 3781
            euro = 0.86
            libraEsterlina = 0.73
        break;
        case "Peso Mexicano":
            dolar = 0.049
            pesoMexicano = 1
            pesoColombiano = 186.23
            euro = 0.042
            libraEsterlina = 0.036
        break;
        case "Peso Colombiano":
            dolar = 0.00026
            pesoMexicano = 0.0054
            pesoColombiano = 1
            euro = 0.00023
            libraEsterlina = 0.00019
        break;
        case "Euro":
            dolar = 1.16
            pesoMexicano = 23.60
            pesoColombiano = 4394.22
            euro = 1
            libraEsterlina = 0.84
        break;
        case "Libra Esterlina":
            dolar = 1.38
            pesoMexicano = 28.01
            pesoColombiano = 5214.38
            euro = 1.19
            libraEsterlina = 1
        break;
        case "Elige tu Moneda":
            error();
        break;
    }

    switch(opcionB){
        case "Dolar":
            operador = dolar;
        break;
        case "Peso Mexicano":
            operador = pesoMexicano;
        break;
        case "Peso Colombiano":
            operador = pesoColombiano;
        break;
        case "Euro":
            operador = euro;
        break;
        case "Libra Esterlina":
            operador = libraEsterlina;
        break;
        case "Elige tu Moneda":
            error();
        break;
    }
    total = cantidadIngresada * operador
    if(isNaN(total) || typeof cantidadIngresada === "string"){
        document.getElementById("inputTotal").placeholder = `  Ingrese datos válidos`;
    }else {
        removeError()
        document.getElementById("inputTotal").value = `  ${total}`;
    }

}

let boton = document.getElementById("inputB")
boton.addEventListener("click", calcular)
