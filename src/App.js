import './App.css';
import freecodecampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';

//importar para usar estados en react
import { useState } from 'react';


function App() {

  const[numClics , setNumClics]=useState(0);
  const manejarClic=()=>{
    setNumClics(numClics+1);
  };

  //const[numClics , setNumClics]=useState(0);

  const reiniciarContador=()=>{
    //console.log('Reiniciar');
    setNumClics(0);
  };
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freecodecampLogo} alt='logo de freecodecamp'/>
      </div>

      <div className='contenedor-principal'>
        <Contador numClics={numClics} >
        </Contador>
        <Boton 
        texto='Clic' 
        esBotonDeClic={true} 
        manejarClic={manejarClic}>
        </Boton>

        <Boton 
        texto='Reiniciar' 
        esBotonDeClic={false}
         manejarClic={reiniciarContador}>
         </Boton>
      </div>
    </div>
  );
}

export default App;
