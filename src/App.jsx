import { useState } from 'react'
import './App.css'

// Componentes
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear'

import logoLinux from './imagenes/logo-linux.png'	


function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
	  setInput(input + val);
  };

  return (
    <>
      <div className='App'>
		  <div className='linux-logo-contenedor'>
			  <img
				  src={logoLinux}
				  className='linux-logo'
				  alt='Logo de Linux' />
		  </div>

		  <div className='contenedor-calculadora'>
			  <Pantalla input={input} />
			  <div className='fila'>
				  <Boton manejarClick={ agregarInput }>1</Boton>
				  <Boton manejarClick={ agregarInput }>2</Boton>
				  <Boton manejarClick={ agregarInput }>3</Boton>
				  <Boton maneharClick={ agregarInput }>+</Boton>
			  </div>
			  <div className='fila'>
				  <Boton manejarClick={ agregarInput }>4</Boton>
				  <Boton manejarClick={ agregarInput }>5</Boton>
				  <Boton manejarClick={ agregarInput }>6</Boton>
				  <Boton maneharClick={ agregarInput }>-</Boton>
			  </div>
			  <div className='fila'>
				  <Boton manejarClick={ agregarInput }>7</Boton>
				  <Boton manejarClick={ agregarInput }>8</Boton>
				  <Boton manejarClick={ agregarInput }>9</Boton>
				  <Boton manejarClick={ agregarInput }>*</Boton>
			  </div>
			  <div className='fila'>
				  <Boton manejarClick={ agregarInput }>=</Boton>
				  <Boton manejarClick={ agregarInput }>0</Boton>
				  <Boton manejarClick={ agregarInput }>.</Boton>
				  <Boton manejarClick={ agregarInput }>/</Boton>
			  </div>
			  <div className='fila'></div>
			  <BotonClear manejarClear={() => setInput('') }>Clear</BotonClear>
		  </div>
      </div>
    </>
  )
}

export default App
