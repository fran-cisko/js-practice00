/* 
for of los elementos del arrray*/

let animales = ['gato', 'perro', 'hipopótamo', 'libélula'];
animales.edad= 10

document.write('<br><strong>for in</strong> muestra la posición de los elementos en el array. Y el nombre de las propiedades.<br>');
for (animal in animales){
    document.write(animal+'<br>');
}

document.write('<br> <strong>for of</strong> el valor de los elementos del arrray<br> ')
for(animal of animales){
    document.write(animal+' <br> ');
}

document.write(animales[0]);

for(animal in animales){
    document.write(animales[animal]);
}