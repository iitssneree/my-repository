import SongTicket from "./components/SongTicket"
import songsData from "./Data/songs"

function App() {
  /******************************************************************
   * Para comprobar que hemos logrado importar los datos de las canciones
   * imprimimos la lista a consola
   * Opción 1 - bucle for con índice
   * for (let idx = 0; idx < songsData.length; idx++) {
   * let currentSong = songsData[idx]
   * console.log('song: ', currentSong)
   * }
   * * Opción 2 - bucle for usando 'of'
   * for (let currentSong of songsData) {
   * console.log('song: ', currentSong)
   * }
   ******************************************************************/

  return (
    <>
      <h1>Lista de música</h1>

      <div className="container">
        {songsData.map((songObj, idx) => {
          return (
            <SongTicket 
              key={idx} // Otra opción es usar songObj.id si existe
              songObj={songObj} 
            />
          )
        })}
      </div>
    </>
  )
}

export default App