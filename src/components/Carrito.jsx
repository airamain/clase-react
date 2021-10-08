import React from 'react';
import Productos from './Productos'
import './carrito.css'

function Carrito({ carrito }) {
    return (
        <div className="carrito">
            <h2>Nuestra compra</h2>
            {carrito.length === 0
                ? <p>Carrito vacio</p>
                : carrito.map(producto => (
                    <Productos
                        key={producto.id}
                        producto={producto}
                    />
                ))}
        </div>
    )
}

export default Carrito
