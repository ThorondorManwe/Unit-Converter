/*
const valor = Number(document.getElementById("entrada").value);


valor.addEventListener('input', haceOperacion);


function haceOperacion(e) {
    console.log(e);
}
 */

const input = document.querySelector('#entrada');
//const log = document.getElementById('valores');

const error = document.getElementById("error");

const meterHTML = document.getElementById("meter");
const feetHTML = document.getElementById("feet");
const meterHTML2 = document.getElementById("meter2");
const feetHTML2 = document.getElementById("feet2");

const literHTML = document.getElementById("liter");
const gallonHTML = document.getElementById("gallon");
const literHTML2 = document.getElementById("liter2");
const gallonHTML2 = document.getElementById("gallon2");

const kiloHTML = document.getElementById("kilo");
const poundHTML = document.getElementById("pound");
const kiloHTML2 = document.getElementById("kilo2");
const poundHTML2 = document.getElementById("pound2");

input.addEventListener('input', updateValue);

function updateValue(e) {
  //log.textContent = e.srcElement.value;

  // Toma el valor y manda a llamar a una función que lo convierte a number y lo imprime dinámico
  valorOriginal = e.srcElement.value;
  convierteNumber(valorOriginal);
}


// Hace los cálculos a cada unidad
// Metro a Feet- 1 meter (m) = 3.28 feet (ft)
function metroToFeet(metro) {
    const feet = metro * 3.28084;
    console.log(`La conversion de ${metro} metros a pies da: ${feet.toFixed(3)} pies.`)
    meterHTML.textContent = metro;
    feetHTML.textContent = feet.toFixed(3);
}

// Feet to metro - 1feet (ft) = 1(m)/3.28
function feetToMetro(feet) {
    const metro = feet / 3.28084;
    console.log(`La conversión de ${feet} pies a metros da: ${metro.toFixed(3)} metros.`);
    meterHTML2.textContent = metro.toFixed(3);
    feetHTML2.textContent = feet;
}

// Liter to gallon
function literToGallon(liter) {
    const gallon = liter * 0.264172;
    console.log(`La conversión de ${liter} litros a gallons da: ${gallon.toFixed(3)} gallons.`);
    literHTML.textContent = liter;
    gallonHTML.textContent = gallon.toFixed(3);
}

// Gallon to liter
function gallonToLiter(gallon) {
    const liter = gallon / 0.264172;
    console.log(`La conversión de ${gallon} gallons a liters da: ${liter.toFixed(3)} liters.`);
    literHTML2.textContent = liter.toFixed(3);
    gallonHTML2.textContent = gallon;
}

// Kilogram to pound
function kiloToPound(kilo) {
    const pound = kilo*2.2046;
    console.log(`La conversión de ${kilo} kilos a pounds da: ${pound.toFixed(3)} pounds.`);
    kiloHTML.textContent = kilo;
    poundHTML.textContent = pound.toFixed(3);
}

// Pound to kilogram
function poundToKilo(pound) {
    const kilo = pound / 2.2046;
    console.log(`La conversión de ${pound} pounds a kilos da: ${kilo.toFixed(3)} kilos.`);
    kiloHTML2.textContent = kilo.toFixed(3);
    poundHTML2.textContent = pound;
}

function convierteNumber(value) {
    const nuevoValorNum = Number(value);

    if(isNaN(nuevoValorNum)) {
        console.log("No es número");
        error.textContent = "No es un número";
    } else {
        error.textContent = "";
        // Llama función para convertir metros a pies
        metroToFeet(nuevoValorNum);
    
        // Llama la función para convertir pies a metros
        feetToMetro(nuevoValorNum);
    
        // Llama la función para convertir litro a gallon
        literToGallon(nuevoValorNum);
    
        // Llama la función para convertir gallon a litro
        gallonToLiter(nuevoValorNum);
    
        // LLama la función para convertir kilos a pound
        kiloToPound(nuevoValorNum);
    
        // Llama la función para convertir de pound a kilo
        poundToKilo(nuevoValorNum);
    }

}