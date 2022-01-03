
function suma(num1, num2) {
        let cuenta = num1 + num2;
        document.write(cuenta);       
}
suma(3,4);

function resta(num1,num2){
    let cuenta = num1 - num2;
    return cuenta
}

resultado_r = resta(7,3);
document.write('<br>'+ resultado_r);


const bienvenida = function(nombre){
    document.write(` Hola ${nombre}, bienvenido.`);
}
bienvenida('Juan');

const despedida = (nombre) =>{
    document.write(` Hasta la próxima ${nombre}.`);
}
despedida('Juan');