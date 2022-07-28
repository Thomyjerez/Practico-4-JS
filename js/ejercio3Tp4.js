// Escribe una clase que permita crear distintos objetos “rectángulos”,
//  con las propiedades de alto y ancho, mas los métodos necesarios para modificar
// y mostrar sus propiedades, calcular el perímetro y el área
class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  get alturaRectangulo() {
    return this.alto;
  }

  get anchoRectangulo(){
    return this.ancho;
  }

  get perimetro(){
    return 2*(this.alto + this.ancho)
  }

  get area (){
   return (this.alto*this.ancho)
  }

  set modificarAltura(nuevaAltura){
    this.alto= nuevaAltura;
  } 

  set modificarAncho(nuevoAncho){
    this.ancho= nuevoAncho;
  }
  detalle(){
    return `<p>El rectangulo tiene un alto de ${this.alto} cm y un ancho de ${this.ancho} cm </p>`
  }

}


document.write(`<h3>Rectangulo N°1</h3>`);

let rectangulo1 =  new Rectangulo (10,5);
document.write(rectangulo1.detalle())
document.write(`<p>El rectangulo N°1 tiene un area de ${rectangulo1.area} cm y un perimetro de ${rectangulo1.perimetro} cm </p>`)

document.write(`<h3>Modifico su ancho y altura</h3>`)
Rectangulo.modificarAltura = 20;
Rectangulo.modificarAncho = 10;
document.write(`<p>El rectangulo N°1 ahora tiene un alto de ${Rectangulo.modificarAltura} y un ancho de ${Rectangulo.modificarAncho}</p>`)

document.write(`<h3>Rectangulo N°2 </h3>`)

let rectangulo2 = new Rectangulo(15,10)
document.write(rectangulo2.detalle());
document.write(`<p>El rectangulo N°2 tiene un area de ${rectangulo2.area} cm y un perimetro ded ${rectangulo2.perimetro} cm</p>`);

document.write(`<h3>Nuevo ancho y altura del rectangulo N°2: </h3>`)
rectangulo2.modificarAltura= 25;
rectangulo2.modificarAncho= 20;
document.write(`El rectangulo N°2 tiene ahora una altura de ${rectangulo2.modificarAltura} cm y un ancho de ${rectangulo2.modificarAncho} cm`)



