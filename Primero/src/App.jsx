import { useState } from 'react';
import img1 from './assets/images/29.jpg'
import img2 from './assets/images/31.jpg'
import img3 from './assets/images/32.jpg'
import './App.css';

function App() {
  return (
    <>
      <h1>Playas del Caribe</h1>

      <h2>Imágenes</h2>
      <ul>
        <li><img src={img1} alt="Imagen 1" /></li>
        <li><img src={img2} alt="Imagen 2"/></li>
        <li><img src={img3} alt="Imagen 3"/></li>
      </ul>

      <h2>Formulario</h2>
      <form action="procesar_formulario.php" method="post">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}

export default App;

