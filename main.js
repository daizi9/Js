
let bandera = true
let total = 0

function funcioncreador(nombreProducto, precioProducto) {
    const objAux = {
        nombre: nombreProducto,
        precio:precioProducto,
    }
    Productos.push(objAux)

}

const plantas = [
    { nombre: 'Monstera', precio: 12000, id: 1 },
    { nombre: 'Spatifylium Reginae', precio: 22000, id: 2 },
    { nombre: 'Stromante', precio: 20000, id: 3 },
    { nombre: 'Aglaonema', precio: 11000, id: 4 },
    { nombre: 'Cactus chico', precio: 2000, id: 5 },
    { nombre: 'Cactus grande', precio: 4500, id: 6 },
    { nombre: 'Yuca', precio: 44000, id: 7 },
    { nombre: 'Palmera Raphi', precio: 45000, id: 8 },
    { nombre: 'Peperomia', precio: 8000, id: 9 },
    { nombre: 'Marginata s12', precio: 5300, id: 10 }

]


class Producto {
    constructor(nombre, precio, id){
        this.nombre = nombre
        this.precio = precio
        this.id = id
        this.cantidad = 0
    }

}



const fabricaDeProductos = () => {
    const auxArray =plantas.map((plantas)=>{
        return new Producto(plantas.nombre, plantas.precio, plantas.id)

    })
  
   
    return auxArray;
}

const arrayProductosPlantas = fabricaDeProductos();

const carritoInstance = new Carrito()




function MostrarProductos(arrayDeProductos) {
    let mensaje = arrayDeProductos.reduce((acc, el) => {
        return acc + `\nID: ${el.id} - Nombre: ${el.nombre} - $${el.precio}`;
    }, 'Los productos que tenemos son estos:\n');

    alert(mensaje);
}


function MostrarProductosForEach(arrayDeProductos) {
    let mensaje = 'Los Productos que tenemos son estos:\n';

    arrayDeProductos.forEach((el) => {
        mensaje += `\nID: ${el.id} - ${el.nombre} - $${el.precio}`;
    });

    alert(mensaje);
}


const filtroPorPalabra = (NombreABuscar) => {
    let arrayAux = arrayProductosPlantas.filter((planta) => {
        return planta.nombre
            .replace(/\s+/g, "")
            .toLowerCase()
            .includes(NombreABuscar.replace(/\s+/g, "").toLowerCase());
    });

    MostrarProductos(arrayAux);
};

const filtromenorQue = (precio) => {
    const arrayAux = arrayProductosPlantas.filter((planta) => {
        return planta.precio < precio;
    });

    MostrarProductos(arrayAux);
};


const filtroMayorQue = (precio) => {
    const arrayAux = arrayProductosPlantas.filter((planta) => planta.precio > precio);
    MostrarProductosForEach(arrayAux);
};

const FuncionSepararNombres = (array) => {
    const nombresProductos = []

    for (let i = 0; i < array.length; i++) {
        nombresProductos.push(array[i].nombre)
        
        
    }
    return nombresProductos

}
const Vercarrito = () => {
    let mensaje = "Estos son productos de tu carrito:\n";
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        total += Number(carrito[i].precio) * carrito[i].cantidad;
    }

    for (let i = 0; i < carrito.length; i++) {
        mensaje += `\n* ${carrito[i].nombre} - $${carrito[i].precio} - ctn: ${carrito[i].cantidad}`;
    }

    mensaje += `\n\nEl total es de $${total}`;

    alert(mensaje);
};


function funcionBuscadora(NombreBuscar) {
    const nombres = FuncionSepararNombres(Productos);
    const index = nombres.indexOf(NombreBuscar);
    if (index === -1) {
        alert("Ese producto no lo tenemos");
    } else {
        const nombresCarrito = FuncionSepararNombres(carrito);
        const idxEnCarrito = nombresCarrito.indexOf(NombreBuscar);
        if (idxEnCarrito === -1) {
            carrito.push({
                nombre: Productos[index].nombre,
                precio: Productos[index].precio,
                cantidad: 1
            });
        } else {
            carrito[idxEnCarrito].cantidad += 1;
        }
    }
}


function TerminarCompra(){
    alert("Muchas gracias por su compra")
    carrito = []
}




const menu =
  "Bienvenidos a Vivero Japones\n 1- Ver productos\n 2- Comprar a partir de ID \n 3- Ver Carrito \n 4-Quitar Producto a partir de un ID\n 5- Comprar \n 0- Salir"
while (bandera) {
  let opciones = Number (prompt(menu))

  switch (opciones) {
    case null:
    case 0:
        bandera= false
        
        break
    case 1:
        MostrarProductos()
        break
    case 2:
        let id = Number(prompt('Que ID de producto quiere comprar?'))
        let cantidad = Number(prompt('Cuantos quiere comprar?'))
        carritoInstance.agregarProducto(id, cantidad)
    
        break
    case 3:
        carritoInstance.mostradorDeCarrito()
       break
    case 4:
         let idQuitar = Number(prompt('Que ID de producto quiere quitar del carrito?'))
         let cantidadQuitar = Number(prompt('Cuantos quiere borrar?'))
       carritoInstance.QuitarProducto(idQuitar, cantidadQuitar)
        break
    case 5:
         let mayorQue = Number(prompt('De cuanto es el filtro?'))
       filtroMayorQue()
       break
    case 6:
        
         let menorQue = Number(prompt('De cuanto es el filtro?'))
       filtromenorQue()

        break
    case 7:
          let texto =(prompt('De cuanto es el filtro?'))
          filtroPorPalabra(texto)
      

        break
    case 8:
        carritoInstance.TerminarCompra()
        break
    default:
        alert("No tenemos esta opcion")
        break
    }
}