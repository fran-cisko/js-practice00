class Animal{
    constructor(especie,edad,color){
        this.especie = especie;//las variables se llaman propiedades en poo.
        this.edad = edad;
        this.color = color;
        this.info = ` Es un ${this.especie} de ${this.edad} años y de color ${this.color}.`

    }
    // en poo las funciones se llaman métodos
verinfo(){ document.write(this.info+"<br>");
  }

}

class Perro extends Animal{
    constructor(especie,edad,color, raza){
        super(especie,edad,color)
        this.raza= raza
    }
    ladrar(){
        document.write("wof wof <br>");
        }

}

const perro = new Animal("peroo", 4, "marrón");
const gato = new Animal("felino", 14, "tricolor")

const doberman = new Perro( "canino", 12, "negro", "doberman")

doberman.verinfo();
doberman.ladrar();
//document.write(perro.info);
// perro.verinfo();
// gato.verinfo();
perro.ladrar();
gato.ladrar();
