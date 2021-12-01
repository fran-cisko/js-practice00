
/*
* Práctica básica
*/

//* Casos especiales de datos: undifined, null, Nan;
/* Declaración de variable.
utilizo let o const, var no. let por que limita la vida de esa variable al
bloque donde la declaré en el Scope. O variable constante que no se puede cambiar así nomás.
la constante se inicializa una sola vez.
*/
// let nuemero;
// numero= 4;
// alert(numero);

// let numero, number2, number3;// let numero=4, number2=
// numero= 4;
// number2= 6;
// number3= 6;
// alert(numero);
// alert(number2);
// alert(number3);

// let numero=4, number2=5, number3=45;

// const numero=4; //se inicializa y declara en la misma linea
// alert(numero);
/*let edad= prompt("cuantos años tienes");

alert("tu tienes "+ edad);*/
// juego: inicio con 3 monedas y se decrementa si no hacierto
/*
let monedas= 3
alert("Comienza el juego con 3 monedas, se le descontará una si no acierta y sumará en caso contrario.");
let numero1;
numero1=parseInt(Math.random()*100);// Debería usarse un random limitado entre -5 y 45 por ejemplo para que sea más fácil.

numero2= Number(prompt("ingrese el número que desea sumar y deduzca el número al cual se le sumó a partir del resultado"));

resultado= numero1 + numero2;

document.write("El resultado es "+ resultado);

let respuesta= Number(prompt("Cuál es el número inicial al cual se le sumó el que pusiste vos?"));

if (respuesta == numero1) {monedas++;}

else {monedas--;}
document.write(" Tienes " + monedas);
*/

