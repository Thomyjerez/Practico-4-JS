let auto = {
    color: [" rojo","negro","blanco"],
    marca: " Mercedes",
    modelo: " AMG clase C",
    motor: false,
    encenderAuto (){
        this.motor = true
},

apagarAuto (){
    this.motor = false
}

};



document.write("<br> Color" + auto.color);
document.write("<br> Marca" + auto.marca);
document.write("<br> Modelo" + auto.modelo);

auto.encenderAuto();
document.write("<br> El motor del auto esta" + ((auto.motor)? " Encendido":" Apagado"));

auto.apagarAuto();
document.write("<br> El motor del auto esta" + ((auto.motor)? " Encendido":" Apagado"));
