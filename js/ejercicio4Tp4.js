//  Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
//  nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// cree tres instancias de este objeto y guárdalas en un array.
// utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.


class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    
    get codigoProducto(){
        return this.codigo;
    }

    get nombreProducto(){
        return this.nombre;
    }

    get precioProducto(){
        return this.precio;
    }

    set modificarCodigo(nuevoProducto){
        return this.codigo = nuevoProducto;
    }
    set modificarNombre(nuevoNombre){
        return this.nombre = nuevoNombre;
    }
    set modificarPrecio(nuevoPrecio){
        return this.precio = nuevoPrecio;
    }

    imprimeDatos (){
        return document.write(`<ul><h1>Detalle del producto: </h1>
        <li>Codigo: ${this.codigo}</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Precio: ${this.precio}</li>
        </ul>`)
    }
}


let Productos = []



let cafe = new Producto (1432, 'Nescafe', 900)

document.write(`<p>Detalle de producto: 
<ul>
<li>Nombre: ${cafe.nombreProducto}</li>
<li>Codigo: ${cafe.codigoProducto}</li>
<li>Precio: ${cafe.precioProducto}</li>
</ul>
</p>`)


let agua = new Producto (2345, 'Powerade', 500)

document.write(`<p>Detalle de producto: 
<ul>
<li>Nombre: ${agua.nombreProducto}</li>
<li>Codigo: ${agua.codigoProducto}</li>
<li>Precio: ${agua.precioProducto}</li>
</ul>
</p>`)

let jugo = new Producto (2346, 'Ades', 350)

document.write(`<p>Detalle de producto: 
<ul>
<li>Nombre: ${jugo.nombreProducto}</li>
<li>Codigo: ${jugo.codigoProducto}</li>
<li>Precio: ${jugo.precioProducto}</li>
</ul>
</p>`)

Productos.push(cafe);
Productos.push(agua);
Productos.push(jugo);
  














