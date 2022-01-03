/*es un bucle determinado donde le digo cuantas veces va a iterar
se compone:
donde declaramos las variables
donde las inicializamos
donde las iteramos. por ejemplo con decremento o incremento*/
let i=20;/*antes y después del bucle i valdrá 20 pero durante el bucle el valor que le asigne en esa región o scope, donde se limita su alcance.*/

document.write('<p>For es un bucle determinado donde le digo cuantas veces va a iterar se compone: donde declaramos las variables d´0nde las inicializamos donde las iteramos. por ejemplo con decremento o incremento. La condición en los 2 próximos bules es i<6 </p><h2>Esto está hecho con for y la variable <strong>i++</strong><br></h2>');
for(let i=0; i<6; i++){
    document.write(i+'<br>');
}
document.write('<h2>La siguiente secuencia está hecha con for y la variable <strong>++i</strong><br></h2> ');
for(let i=0; i<6; ++i){
    document.write(i+'<br>');
}