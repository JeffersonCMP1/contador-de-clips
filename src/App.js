import './App.css';
import freecodecampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';

function App() {

  const manejarClic=()=>{
    console.log('clic');
  }

  const reiniciarContador=()=>{
    console.log('Reiniciar');
  }
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freecodecampLogo} alt='logo de freecodecamp'/>
      </div>

      <div className='contenedor-principal'>
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
