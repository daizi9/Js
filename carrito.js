class Carrito {
    constructor() {
        this.productos = []; // Productos en el carrito
        this.productosCarritoId = [];
        this.total = 0;
    }

    agregarProducto(id, cantidad = 1) {
        let productoEnCarrito = this.productos.find(producto => producto.id === id);

        if (!productoEnCarrito) {
            let plantaElegida = arrayProductosPlantas.find(el => el.id === id);
            if (!plantaElegida) {
                alert("Producto no encontrado.");
                return;
            }

            // Creamos una copia para no modificar arrayProductosPlantas
            const productoACarro = {
                ...plantaElegida,
                cantidad: cantidad
            };
            this.productos.push(productoACarro);
        } else {
            productoEnCarrito.cantidad += cantidad;
        }

        this.sumadorDeTotal();
    }

    quitarProducto(id, cantidad) {
        const index = this.productos.findIndex(el => el.id === id);

        if (index === -1) {
            alert("No está este producto en el carrito");
            return;
        }

        if (this.productos[index].cantidad <= cantidad) {
            this.productos.splice(index, 1);
        } else {
            this.productos[index].cantidad -= cantidad;
        }

        this.sumadorDeTotal();
    }

    mostradorDeCarrito() {
        if (this.productos.length === 0) {
            alert('No tiene nada en el carrito');
            return;
        }

        let mensaje = 'Los productos que tiene en el carrito son:\n';
        this.productos.forEach(el => {
            mensaje += `ID: ${el.id} - ${el.nombre} - $${el.precio} x ${el.cantidad}\n`;
        });

        mensaje += `\nSu total es de: $${this.total}`;
        alert(mensaje);
    }

    sumadorDeTotal() {
        this.total = this.productos.reduce((acc, el) => {
            return acc + el.precio * el.cantidad;
        }, 0);
    }

    llenadoraDeArrayDeIDCarrito() {
        this.productosCarritoId = this.productos.map(p => p.id);
    }

    terminarCompra() {
        if (this.productos.length === 0) {
            alert("Su carrito está vacío.");
            return;
        }

        alert(`Gracias por su compra, su total es de: $${this.total}`);
        this.productos = [];
        this.total = 0;
        this.productosCarritoId = [];
    }
}
