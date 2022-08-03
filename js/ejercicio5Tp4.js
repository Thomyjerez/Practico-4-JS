// Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
//  año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando
//  a qué generación pertenece la persona creada y cual es el rasgo
// característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion(generacion, marcoTemporal, poblacion, historia, rasgo) {
    return `<ul>
        <li>Nombre de la generacion: ${generacion}</li>
        <li>Marco temporal: ${marcoTemporal}</li>
        <li>Poblacion de las generaciones: ${poblacion}</li>
        <li>Circunstancia historica: ${historia}</li>
        <li>Rasgo caracteristico: ${rasgo}</li>
        </ul>`;
  }
  generacionPersona() {
    if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      return this.mostrarGeneracion(
        "Generacion Z",
        "1994-2010",
        "7.800.000",
        "Expansion masiva de internet",
        "Irreverencia"
      );
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      return this.mostrarGeneracion(
        "Generacion Y",
        "1982-1993",
        "7.200.000",
        "Inicio de la digitalizacion",
        "Frustracion"
      );
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      return this.mostrarGeneracion(
        "Generacion X",
        "1969-1980",
        "9.300.000",
        "Crisis del 73 y transicion española",
        "Obsesion por el exito"
      );
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      return this.mostrarGeneracion(
        "Baby Boom",
        "1949-1968",
        "12.200.000",
        "Paz y explosion demografica",
        "Ambicion"
      );
    } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      return this.mostrarGeneracion(
        "Silent Generation",
        "1930-1948",
        "6.300.000",
        "Conflictos belicos",
        "Austeridad"
      );
    } else {
      return `<p>No tenemos datos para su fecha de nacimiento</p>`
    }
  }
  esMayorEdad() {
    if (this.edad >= 18){
     return "Es mayor de edad"
  } else {
      return "Es menor de edad"
  }
}
  
    mostrarDatos() {
    return `<ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Edad: ${this.edad}</li>
    <li>DNI: ${this.dni}</li>
    <li>Sexo: ${this.sexo}</li>
    <li>Peso: ${this.peso}</li>
    <li>Altura: ${this.altura}</li>
    <li>Año de nacimiento: ${this.anioNacimiento}</li>
    </ul>`;
  }
  
  generaDNI() {
    return parseInt(Math.random() * 999999999);
  }
}

// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que
// la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));
let dni = prompt("Ingrese su dni");
let sexo = prompt("Ingrese su genero");
let peso = prompt("Ingrese su peso");
let altura = prompt("Ingrese su altura");
let anioNacimiento = prompt("Ingrese su año de nacimiento");

let personaIngresada = new Persona( nombre, edad, dni,sexo, peso,altura,anioNacimiento);


document.write(personaIngresada.mostrarDatos());
document.write(personaIngresada.esMayorEdad() );
    
document.write(personaIngresada.generacionPersona());

    