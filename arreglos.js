//este es el archivo de arreglos

let nombres=["Felipe","Danilo","Laura"];

console.log(nombres);

console.log(nombres[0])
// Agregar elementos al arreglo de nombres
nombres.push("santiago");
console.log(nombres);
let equipos=["real madrid","barcelona","atletico nacional","arsenal","millonarios"];

console.log(equipos);

console.log(equipos[1]);
//Averiguar el total de elementos
let motos=["yamaha","kawasaki","honda","suzuki","Dukai"];
//motos.let
console.log(motos.length);
console.log(motos[1]);

//sumar los numeros de un arreglo
let numeros = [2,7,5,3,2]
let suma = numeros.reduce((acumulador,valoractual)=> acumulador + valoractual, 0);
console.log(suma);

//encontar el numero mayor de un arreglo
let numeroMayor = Math.max(...numeros);
console.log(numeroMayor);

// invertir los textos de un arreglo
let frutas = ["Manzana","Pera","Puayaba","Lulo","Mango"];
let frutasInvertidas = frutas.slice().reverse();
console.log(frutasInvertidas);
// agrupar arreglos en un nuevo arreglo
let mujeres = ["laura","sofia","valentina","daniela"];
let hombres = [ "felipe","danilo","stywart","brayan"];
let personas = [...mujeres,...hombres];
console.log(personas);

// poner en mayusculas el segundo elemento
let mayusculas = mujeres [2].toUpperCase();
console.log(mayusculas);
