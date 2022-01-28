// celu que tenga color, peso, resolución de pantalla y de cámara, ram. 
//que pueda encender y apagar, reiniciar, tomar foto.

class Celular {
    constructor(modelo, color, peso, resPantalla, resCamara, mRam){
        this.modelo = modelo
        this.color = color
        this.peso= peso
        this.resPantalla = resPantalla
        this.resCamara = resCamara
        this.mRam = mRam
        this.boton = false;
  
    }

    onOff(){
        if (this.boton == false){
            alert("encendiendo")
            this.boton = true;
        } else{
            alert("apagando el equipo")
            this.boton = false;
        }
    }

    reiniciar(){
        if(this.boton == true){
            alert("reiniciando equipo")
        } else{
            alert("el equipo está apagado")

        }
    }
    fotografiar(){
        alert(`foto sacada con ${this.resCamara} de resolución`)
    }

    info(){return `
        Modelo:<strong>${this.modelo}</strong><br>
        Color:<strong>${this.color}</strong><br>
        Peso:<strong>${this.peso}</strong><br>
        Tamaño pantalla:<strong>${this.resPantalla}</strong><br>
        Definición:<strong>${this.resCamara}</strong><br>
        Memoria RAM: <strong>${this.mRam}</strong><br><br>

    `}

}



celu1 = new Celular("galaxy1","azul", "120gr","5pulgadas", "full HD", "2gb");
celu2 = new Celular("tet3","negro", "130gr","5pulgadas", "HD", "1gb");
celu3 = new Celular("htc43", "110gr","6pulgadas", "full HD", "2gb");


// celu1.onOff();
// celu1.fotografiar();
// celu1.reiniciar();
// celu1.onOff();
document.write(` 
<h2>Smartphones</h2>
${celu2.info()}<br>
${celu1.info()}<br> 
${celu3.info()}<br> `);


//================= Celus de Alta Gama =======================//

class CeluAltaGama extends Celular{
    constructor(modelo, color, peso, resPantalla, resCamara, mRam, camExtra){
        super (modelo, color, peso, resPantalla, resCamara, mRam);
            this.camExtra = camExtra;
    }
    camaraSL(){
        return alert("grabación a 0.25 % velocidad") ;
    }
    reconocimientoFacial(){
        return alert("mire la cámara para reconocimiento facial");
    }
    infoAG(){return `
    Modelo:<strong>${this.modelo}</strong><br>
    Color:<strong>${this.color}</strong><br>
    Peso:<strong>${this.peso}</strong><br>
    Tamaño pantalla:<strong>${this.resPantalla}</strong><br>
    Definición:<strong>${this.resCamara}</strong><br>
    Memoria RAM: <strong>${this.mRam}</strong><br>
    Cámara extra: <strong>${this.camExtra}</strong><br><br>

`}
}


celuAG1 = new CeluAltaGama ("galaxy1","azul", "120gr","5pulgadas", "full HD", "2gb", "cámara extra full");
// celuAG1.onOff()
// celuAG1.fotografiar();
// celuAG1.reiniciar();
// celuAG1.camaraSL();
// celuAG1.reconocimientoFacial();
// celuAG1.onOff();

document.write(` 
<h2>Smartphones Alta Gama</h2>
${celuAG1.infoAG()}<br>`
);
