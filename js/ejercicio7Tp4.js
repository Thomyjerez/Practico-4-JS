// Nos piden realizar una agenda telefónica de contactos.
// Un contacto está definido por un nombre y un teléfono.
// Se considera que un contacto es igual a otro cuando sus nombres son iguales.
// Una agenda de contactos está formada por un conjunto de contactos.
// Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).
// metodos
// agenda telefonica de contactos, un contacto esta definido por un nombre y un telefono, el nombre es unico
// la agenda contiene contactos y sera creada con un tamaño por defecto de 10 o el usuario puede modificar el tamaño

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Conctacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.
// Crea un menú con opciones por consola para probar todas estas funcionalidades.
// guardamos un objeto dentro de una variable

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}
class Agenda {
  constructor(tamanio = 10) {
    this.contactos = [];
    this.tamanio = tamanio;
  }
  agregarContacto(contactoNuevo){
      // verificar si el contacto existe
    if(this.existeContacto(contactoNuevo.nombre)=== true){
        console.log('El contacto ya existe, no lo agrego')
    }else{

        // verificar si la agenda esta llena retorna false
        if(this.agendaLlena() === false){
            this.contactos.push(contactoNuevo);

        }

    }
    console.log(this.contactos)
  }
  existeContacto(nombre){
    // es porque el contacto existe
    const contactoExistente = this.contactos.find((itemContacto)=> {return nombre === itemContacto.nombre})
    console.log(contactoExistente)
    if (contactoExistente) {
        return true
        console.log('El contacto existe');
    }else{
        console.log('El contacto no existe');
        return false
    }
  }
  agendaLlena(){
    if(this.contactos.length === this.tamanio){
        console.log ('La agenda esta llena')
        return true;
    }else{
        console.log('Hay espacio disponible')
        return false;
    }
  }
  eliminaroContacto(nombre){
    let contactosFiltrados = this.contactos.filter((itemContacto)=>{return itemContacto.nombre != nombre})
    this.contactos = contactosFiltrados;
    console.log('Elemento eliminado');
    console.log(this.contactos);

  }
}
// creo la agenda

let agendaTelefonica = new Agenda (10)
console.log(agendaTelefonica)


// menu de opciones
do {
    let opcion = parseInt(prompt(`Seleccione una opcion:
1- Agregar un contaco
2- Consultar si el contacto existe
3- Listar los contactos
4- Buscar un contacto
5- Eliminar un  contacto
6- Consultar si la agenda esta llena
7- Consultar si la agenda tiene huecos libres
8- Cambiar el tamaño de la agenda`));

switch (opcion){
    case 1:
        // pedir el nombre y telefono
        let nombre = prompt('Ingrese un nombre').toLowerCase();
        let telefono = prompt('Ingrese un telefono');
        // crear el contacto 
        let nuevoContacto = new Contacto(nombre, telefono);
        // invocar a agregarContacto
         agendaTelefonica.agregarContacto(nuevoContacto);
    
        break;
    case 2:
        let nombreBuscado = prompt('Ingrese un nombre').toLowerCase();
        agendaTelefonica.existeContacto(nombreBuscado);
        break;
    case 3:
        
        break;
    case 4:

        break;
    case 5:
        let contactoBorrar = prompt('Ingrese un nombre').toLowerCase();
        agendaTelefonica.eliminaroContacto(contactoBorrar);

        break;
    case 6:

        break;
    case 7:

        break;
     
    case 8:
        break;
    default:
        alert('Ingreso una opcion incorrecta');    
     
}
} while (confirm('¿Quiere realizar otra operacion?'));



