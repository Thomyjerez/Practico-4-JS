// Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN Título Autor Número de páginas
// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro()
// para mostrar la información relativa al libro con el siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
  constructor(libro, isbn, titulo, autor, numeroPaginas) {
    (this.libro = libro),
      (this.isbn = isbn),
      (this.titulo = titulo),
      (this.autor = autor),
      (this.numeroPaginas = numeroPaginas);
  }

  set modificarIsbn(nuevoIsbn) {
    this.isbn = nuevoIsbn;
  }

  set modificarTitulo(nuevoTitulo) {
    this.titulo = nuevoTitulo;
  }

  set modificarAutor(nuevoAutor) {
    this.autor = nuevoAutor;
  }

  set modificarNumeroPaginas(nuevaCantidadPaginas) {
    this.numeroPaginas = nuevaCantidadPaginas;
  }

  get mostrarIsbn() {
    return this.isbn;
  }

  get mostrarTitulo() {
    return this.titulo;
  }

  get mostrarAutor() {
    return this.autor;
  }

  get mostrarNumeroPaginas() {
    return parseInt(this.numeroPaginas);
  }

  mostrarLibro() {
    return `El libro: ${this.libro}, con el ISBN: ${this.mostrarIsbn}, creado por el autor ${this.mostrarAutor}, tiene una cantidad de ${this.mostrarNumeroPaginas} paginas.`;
  }
}

function biblioteca(libro1, libro2) {
  if (libro1.mostrarNumeroPaginas > libro2.mostrarNumeroPaginas) {
    return `<p>${libro1} tiene mayor cantidad de paginas</p>`
    
  } else if((libro2.mostrarNumeroPaginas > libro1.mostrarNumeroPaginas)) {
    return  `<p>${libro2} tiene mayor cantidad de paginas</p>` 
  } else {
    `<p>El ${libro1} y el ${libro2} tienen la misma cantidad de paginas</p>`
  }
}

let laVidaEsUnaMisionSecreta = new Libro(
    "La vida es una mision secreta",
    9789500765381,
    160,
    'Carlos Alberto "El Indio" Solari'
);
let cienAñosDeSoledad = new Libro(
    "Cien años de soledad",
    9789871138142,
    496,
    "Gabriel Garcia Marquez"
);

document.write(laVidaEsUnaMisionSecreta.mostrarLibro());
document.write(`<br>`);
document.write(cienAñosDeSoledad.mostrarLibro());

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro()
// para mostrar la información relativa al libro con el siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
