/* de una frase cualquiera tengo que pasar las palabras separadas por espacio a un arreglo */


// manera 2
const stringToArray2 = (string="" , separador= undefined) => 
(!string)
?console.warn("ingrese un texto que desee transformar en arreglo de palabras")
:(separador === undefined)
    ?console.warn("ingrese separador deseado")
    :console.info(string.split(separador));

stringToArray2("");
stringToArray2("lkdfa aldkjf");   
stringToArray2("una cosa es una cosas", " ");


let palabrotas = "ladf,ladf, adfkj ,dfkaj, asdfk";
console.info(palabrotas.split(","));

