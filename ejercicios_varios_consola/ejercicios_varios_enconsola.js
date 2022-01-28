/* 1. funcion que cuente el número de caracteres de una cadena de texto*/

// manera 1. Funciones declaradas
const cuentaCaracteres = function (string=""){
    if(!string){
        console.console.warn("escribe una sentencia cualquiera");
    }
    else{
        console.info(` La cadena "${string}" tiene ${string.length} caracteres`);
    }
}
cuentaCaracteres(" Había una avestruz");

// Manera 2. operador ternario. Funciones expresadas

const countCharacters = (string = "") => 
(!string)
    ?console.warn("escribe una sentencia")
    :console.info(` La cadena "${string}" tiene ${string.length} caracteres`);

countCharacters("test2");

/* 2. Programa una función que te devuelve el texto recortado según el número de caracteres
indicados, pe.miFuncion("Hola Mundo",4) Devolverá Hola*/
// Manera 1.
const cutText = (string_cut="", length = undefined)=>           
(!string_cut)
    ?console.warn("escribe una sentencia")
    :console.info(string_cut.slice(0,length));
cutText( "hola laala",4);

// Manera 2
const cutText2 = (string_cut="", length = undefined) =>
    console.info(string_cut.substring(0,length));

cutText2("Hola Mundo", 4);

// manera 3, dar aviso que no llenó la longitud coon que desea cortar.
const cutText3 = (string="", length = undefined) =>
    (!string)
    ?console.warn("Escribe una oración que quieras acortar.")
    :(length === undefined)  
        ?console.warn("Escribe dode quieres cortar la oración.")
        :console.log(string.slice(0,length));    

cutText3("lalala",3)


/* Programa una funcioón que repita un teto n cantidad de veces*/



const repitTexts = (stringToRepit="", nRepetitions=undefined) =>{
//validaciones. Omito{} ya que hacen una sola cosa
if(!stringToRepit) return console.warn('ingresa texto a repetir');
if(nRepetitions === undefined) return console.warn('ingresa la cantidad de veces que desea repetir el texto');
if(nRepetitions === 0) return console.error('no se puede repetir por cero veces');
if(Math.sign(nRepetitions) === -1)return console.error('un nro. negativo no es válido, ingrese uno positivo.');
//lógica que resuelve el ejercicio
    for(let i =1; i <= nRepetitions; i++){
    console.info(`el texto: ${stringToRepit} se repite ${i}`)
    } 
}
repitTexts("vamo que se puede", 5);