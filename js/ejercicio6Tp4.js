// Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN Título Autor Número de páginas
// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro()
// para mostrar la información relativa al libro con el siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
  constructor( isbn, titulo, autor, numeroPaginas) {
      this.isbn = isbn,
      this.titulo = titulo,
      this.autor = autor,
      this.numeroPaginas = numeroPaginas;
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
    return `<p>El libro: ${this.mostrarTitulo}, con el ISBN: ${this.mostrarIsbn}, creado por el autor ${this.mostrarAutor}, tiene una cantidad de ${this.mostrarNumeroPaginas} paginas.</p>`;
  }
}

function biblioteca(libro1, libro2) {
  if (libro1.mostrarNumeroPaginas > libro2.mostrarNumeroPaginas) {
    return `<p>${libro1.mostrarTitulo} tiene mayor cantidad de paginas</p>`;
  } else if (libro1.mostrarNumeroPaginas === libro2.mostrarNumeroPaginas) {
    return `<p>El libro ${libro1.mostrarTitulo} tiene la misma cantidad de pagina que ${libro2.mostrarTitulo}</p>`;
  } else {
    return `<p>El libro ${libro2.mostrarTitulo} tiene mayor cantidad de paginas</p>`;
  }
}

let laVidaEsUnaMisionSecreta = new Libro(
  9789500765381,
  "La vida es una mision secreta",
  'Carlos Alberto "El Indio" Solari',
  160,
);
let cienAñosDeSoledad = new Libro(
  9789871138142,
  "Cien años de soledad",
  "Gabriel garcia marquez",
  496,
);

document.write(cienAñosDeSoledad.mostrarLibro());
document.write(laVidaEsUnaMisionSecreta.mostrarLibro());
document.write(biblioteca(laVidaEsUnaMisionSecreta, cienAñosDeSoledad));

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro()
// para mostrar la información relativa al libro con el siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.