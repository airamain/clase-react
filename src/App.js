import React, { Fragment, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Productos from './components/Productos.jsx';
import Carrito from './components/Carrito.jsx';

function App() {

  //Crear un listado de productos 
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'fideos', precio: 50 },
    { id: 2, nombre: 'azucar', precio: 50 },
    { id: 3, nombre: 'Agua mineral', precio: 50 },
    { id: 4, nombre: 'arroz', precio: 50 }
  ])

  // State para el carrito
  const [carrito, setCarrito] = useState([]);

  return (
    <div className="App">
      <Header titulo="Primera Clase React" />

      <h1>Lista de Productos</h1>

      {productos.map(producto => (
        <Productos
          key={producto.id}
          producto={producto}
          carrito={carrito}
          setCarrito={setCarrito}
          productos={productos}
        />
      ))}

      <Carrito
        carrito={carrito}
        setCarrito={setCarrito}
      />
      <Footer />
    </div>
  );
}

export default App;
