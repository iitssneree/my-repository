import { useState } from 'react'
import './App.css'
import { personajes } from './data/personajes'
import Tarjeta from './components/Tarjeta'

function App() {
  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <div className="App">
      <h1>Selector de Personajes</h1>
      
      <div className="menu-botones">
        {personajes.map((p) => (
          <button 
            key={p.id} 
            onClick={() => setSeleccionado(p)}
            className={seleccionado?.id === p.id ? 'active' : ''}
          >
            {p.nombre}
          </button>
        ))}
      </div>

      <div className="tarjeta-container">
        <Tarjeta personaje={seleccionado} />
      </div>
    </div>
  )
}

export default App