let array1=['Fulano', 'Mengano', 'Sultano'];
let array2=['Pepe','Pepa',array1];
let array3=['Pepe','Pepa',''];

document.write(array2);

//lo siguiente es para mostrar lo mismo que document.write(array2); pero más rebuscadamente.
for(nombre in array3){
    if(nombre == 2){
    document.write("<br>" + array1) ;   
    }
    else{
        document.write("<br>" + array3[nombre]);
    }
}
