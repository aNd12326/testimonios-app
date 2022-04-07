import React from 'react';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require('../imagenes/testimonio-emma.png')}
        alt='Foto de emma'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
        <p className='cargo-testimonio'>Ingeniera de Software en Spotify</p>
        <p className='texto-testimonio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque dicta laborum labore dolorum? Inventore nemo, asperiores quae ea totam rem doloribus necessitatibus ipsa fugiat modi quaerat, accusantium assumenda id natus reprehenderit. Nostrum voluptates ullam eaque, veritatis libero est? Inventore, tenetur nobis? Magnam natus, distinctio nisi dolorem earum aliquam nobis iure fugiat nulla voluptatibus itaque corrupti in, veritatis excepturi sequi.</p>
      </div>
    </div>
  )
}

export default Testimonio;