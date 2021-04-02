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
console.log(`%c EXPRESIONES REGULARES ----------------------`, `background-color: yellow; color: black`);
