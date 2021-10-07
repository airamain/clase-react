import React from 'react'

const Productos = ({ producto, carrito, setCarrito, productos, setProductos }) => {

    const { nombre, precio, id } = producto
    //Agregar producto al carrito
    const seleccionarProducto = (id) => {
        const product = productos.filter(
            producto => producto.id === id
        )[0]
        setCarrito([
            ...carrito,
            product

        ])
    }
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <p>Precio: ${precio}</p>
            <button
                type="button"
                onClick={() => seleccionarProducto(id)}
            >
                Comprar
            </button>
        </div>

    )
}

export default Productos
