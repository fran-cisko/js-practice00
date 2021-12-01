/*
let frutas =["pera", "banana", "manzana"];
document.write(frutas[0]);
let pcRoberto=["intel", "5gb","solido"]
*/

let pc1= {
    procesador:"intel", 
    ram:"5gb", 
    disco: "s&oacutelido",
    espacio: "1tb",
}

/*
document.write(pc1["procesador"]);
*/

let procesador = pc1["procesador"];
let ram = pc1["ram"];
let disco = pc1["disco"];
let espacio = pc1["espacio"]

caracteristicas = ` La computadora tiene un procesador marca ${procesador},<br>
una memoria ram de ${ram}, <br>
un disco ${disco} de ${espacio}.`
document.write(caracteristicas);