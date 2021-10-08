import React from 'react';
import Productos from './Productos'
import './carrito.css'

function Carrito({ carrito, setCarrito }) {
    return (
        <div className="carrito">
            <h2>Nuestra compra</h2>
            {carrito.length === 0
                ? <p>Carrito vacio</p>
                : carrito.map(producto => (
                    <Productos
                        key={producto.id}
                        producto={producto}
                        carrito={carrito}
                        setCarrito={setCarrito}
                    />
                ))}
        </div>
    )
}

export default Carrito
