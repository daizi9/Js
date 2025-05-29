const Productos = []
let carrito = []
let bandera = true
let total = 0

function funcioncreador(nombreProducto, precioProducto) {
    const objAux = {
        nombre: nombreProducto,
        precio:precioProducto,
    }
    Productos.push(objAux)

}



function MostrarProductos(){
    if(Productos.length == 0){
        alert("No hay productos")
        return
    }
    let mensaje = "Los Productos son:\n"

    for (let i = 0; i < Productos.length; i++) {
       mensaje +=`\n ${Productos[i].nombre} - $${Productos[i].precio}`

       
    
    }
    alert(mensaje)
}

const FuncionSepararNombres = (array) => {
    const nombresProductos = []

    for (let i = 0; i < array.length; i++) {
        nombresProductos.push(array[i].nombre)
        
        
    }
    return nombresProductos

}
const Vercarrito = () => {
    let mensaje = "Estos son productos de tu carrito:\n"
    total = 0

    for (let i = 0; i < carrito.length; i++) {
        total += Number(carrito[i].precio) * carrito[i].cantidad
        
    }
    for (let i = 0; i < carrito.length; i++) {
        mensaje += `\n * ${carrito[i].nombre} - ${carrito[i].precio}- ctn: ${carrito[i].cantidad}`   
    }

   mensaje +=`\n  El total es de $ ${total}`

   alert(mensaje)
    
}

const funcionBuscadora = function(NombreBuscar){
    const Nombres = FuncionSepararNombres(Productos)


    let index2 = Nombres.indexOf(NombreBuscar)
    if(index == -1){
        alert("Ese producto no lo tenemos")
    } else {
        const Nombrecarrito = FuncionSepararNombres(carrito)
        let index2 = Nombrescarrito.indexOf(NombreBuscar)

        
        console.log(Nombrescarrito)
        if(index2 == -1) {
            let objetodelcarrito = {
            nombre: Productos[index].nombre,
            precio: Productos[index].precio,
            cantidad: 1
            }
             carrito.push(objetoDelcarrito)

        }else {
            carrito[index2].cantidad += 1
        }

        
       
    }

}

function TerminarCompra(){
    alert("Muchas gracias por su compra")
    carrito = []
}




const menu =
  "Bienvenidos a Vivero Japones\n 1- Ver productos\n 2- Agregar productos al listado\n 3- Agregar Producto al carrito\n 4-carrito\n 5- Terminar compra\n 0- Salir"
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
        let auxNombre = prompt("Como se llama el producto")
        let auxPrecio = prompt("Cuanto vale el producto")
        funcioncreador(auxNombre, auxPrecio)
        break
    case 3:
        let auxProductoABuscar = prompt("Que producto quiere comprar?")
        funcionBuscadora(auxProductoABuscar)
        break
    case 4:
        Vercarrito()
        break
    case 5:
        TerminarCompra()

        break
    default:
        alert("No tenemos esta opcion")
        break
    }
}