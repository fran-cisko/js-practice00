/* Solo pueden entrar al lugar mayores de 18 años y el primero que pasa luego de las 2am pasa gratis.*/
let free = false;

const entrada = (time) => {
    let edad = Number(prompt("cuál es tu edad"));
        if (edad >= 18){
            if (time>2 && time < 7 && !free){
                alert("pasás gratis");
                free=true;
            }

            else{
                alert(`la entrada cuesta 2 dólares porque ahora son las ${time}`);
            }
        }

        else{ 
            alert("Lo siento, solo a partir de 18 años.")
        }

}
entrada(15);
entrada(5);
entrada(2);
entrada(123);