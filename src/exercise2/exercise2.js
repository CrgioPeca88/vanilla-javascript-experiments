'use strict';

function sum(numberList) {
  let total = 0;
  numberList.forEach(function(element) {
    total = total + element;
  })
  return total;
}
const n1 = 8;
console.log(sum([n1, 10, 32]));

//============================================================================

function correr(direccion) {
  return `Test THIS -> ${this.name} corre hacia el ${direccion}`;
}

console.log(correr.apply({name: 'sergio'},['Norte']));
console.log(correr.call({name: 'peca'}, 'Sur'));
const bind = correr.bind({name: 'peca'}, 'Sur');
console.log(bind());

//============================================================================
console.log("_______ Test Prototype _________");
function Motorcycle(brand, model){
  const moto = Object.create(Motorcycle.prototype);
  moto.brand = brand;
  moto.model = model;
  return moto;
}

Motorcycle.prototype.start = function() {
  console.log(`Arrancando moto ${this.brand} ${this.model}`);
}

const moto1 = Motorcycle('Kawasaki', 'Ninja ZX10R');
moto1.start();
console.log(moto1);

console.log("_______ Test Prototype 2 _________");

function Motorcyclee(brand, model){
  this.brand = brand;
  this.model = model;
}

Motorcyclee.prototype.start = function() {
  console.log(`Arrancando moto ${this.brand} ${this.model}`);
}

const moto2 = new Motorcyclee('Ducati', 'Panigale V4R');
moto2.start();
console.log(moto2);

//==============================================================================
console.log("_______ Herencia Prototypal _________");

function Vehiculo(marca) {
  this.marca = marca;
}

Vehiculo.prototype.encender = function() {
  console.log(`Encendiendo vehiculo ${this.marca}`);
}

function Motocicleta(modelo, marca) {
  Vehiculo.call(this, marca);
  this.modelo = modelo;
}

Motocicleta.prototype = Object.create(Vehiculo.prototype, {
  encender: {
    value: function() {
      console.log(`Encendiendo motocicleta ${this.marca} ${this.modelo}`);
    }
  }
});

const m = new Motocicleta(`Ninja ZX10RR`, `Kawasaki`);
m.encender();
console.log(m);

//======================EXPRESIONES REGULARES====================================
console.log(`%c EXPRESIONES REGULARES ----------------------`, `background-color: yellow; color: black; font-weight: bold`);

let stringText = 'Hola mi nombre es: nombre=crgiopeca88';
let expression = /nombre/gm;
let result = stringText.match(expression);
console.log(`%c RE_1 > literal chars: ${stringText} =>`, `background-color: black; color: yellow`, result);

let stringText2 = 'Hola mi nombre es: nombre=crgiopeca88';
let expression2 = /[aeiou]/gm;
let result2 = stringText2.match(expression2);
console.log(`%c RE_2 > set chars: ${stringText2} =>`, `background-color: yellow; color: black`, result2);

let stringText3 = 'Hola mi NOMBRE es: nombre=CRGIOpeca88';
let expression3 = /[A-Ga-g]/gm;
let result3 = stringText3.match(expression3);
console.log(`%c RE_3 > set chars with range: ${stringText3} =>`, `background-color: black; color: yellow`, result3);

let stringText4 = '1). Hola mi NOMBRE es: nombre=CRGIOpeca88';
let expression4 = /[A-Ga-g0-9peca]/gm; // /[A-Ga-g0-9]|peca88/gm
let result4 = stringText4.match(expression4);
console.log(`%c RE_4 > set chars with range and literal chars: ${stringText4} =>`, `background-color: yellow; color: black`, result4);

let stringText5 = `sergio andres
peña cardozo
crgio
peca
crgiopeca88
angiesita
angie garcia
rodriguez`;
let expression5 = /[a-z]+/gm;
let result5 = stringText5.match(expression5);
console.log(`%c RE_5 > repeat char "+" to repeat sets: ${stringText5} =>`, `background-color: black; color: yellow`, result5);

let stringText6 = `sergio andres
peña cardozo
crgio
peca
crgiopeca88
angiesita
angie garcia
rodriguez`;
let expression6 = /[a-z]*/gm;
let result6 = stringText6.match(expression6);
console.log(`%c RE_6 > repeat char "*" to repeat sets adding unlimited value like undefined: ${stringText6} =>`, `background-color: yellow; color: black`, result6);

let stringText7 = `123
123456
12345678
0000
88
888`;
let expression7 = /[0-9]{4,5}/gm; //between 4 and 5
let result7 = stringText7.match(expression7);
console.log(`%c RE_7 > set with range and length: ${stringText7} =>`, `background-color: black; color: yellow`, result7);

let stringText8 = `123
123456sss
12345688
0000
88
888`;
let expression8 = /[^0-9]+/gm;
let result8 = stringText8.match(expression8);
console.log(`%c RE_8 > set negation: ${stringText8} =>`, `background-color: yellow; color: black`, result8);
