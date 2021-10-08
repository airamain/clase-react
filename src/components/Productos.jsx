import React from 'react'

const Productos = ({ producto, carrito, setCarrito, productos, setProductos }) => {

    const { nombre, precio, id } = producto

    //Agregar producto al carrito
    const seleccionarProducto = id => {
        const product = productos.filter(
            producto => producto.id === id
        )[0]
        setCarrito([
            ...carrito,
            product

        ])
    }

    //Eliminar producto al carrito
    const eliminarProducto = id => {
        const product = carrito.filter(producto => producto.id !== id);

        //Colocar los productos en el state
        setCarrito(product)
    }

    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <p>Precio: ${precio}</p>

            {productos
                ?
                (
                    <button
                        type="button"
                        onClick={() => seleccionarProducto(id)}
                    >
                        Comprar
                    </button>
                )
                :
                (
                    <button
                        type="button"
                        onClick={() => eliminarProducto(id)}
                    >
                        Eliminar
                    </button>
                )
            }
        </div>

    )
}

export default Productos
