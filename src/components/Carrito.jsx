import React from 'react';
import Productos from './Productos'
import './carrito.css'

function Carrito({ carrito }) {
    return (
        <div className="boca">
            <h2>Nuestra compra</h2>

            {carrito.map(producto => (
                <Productos
                    key={producto.id}
                    producto={producto}
                />
            ))}
        </div>
    )
}

export default Carrito
