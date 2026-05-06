import React, { useState } from 'react';

const App = () => {
  // 1. Estado inicial de la lista de canciones
  const [songs, setSongs] = useState([
    { id: 1, title: "Bohemian Rhapsody", artist: "Queen", year: 1975 },
    { id: 2, title: "Blinding Lights", artist: "The Weeknd", year: 2019 },
    { id: 3, title: "Hotel California", artist: "Eagles", year: 1976 },
  ]);

  // Estados para el buscador y el formulario
  const [searchTerm, setSearchTerm] = useState("");
  const [newSong, setNewSong] = useState({ title: "", artist: "", year: "" });

  // 2. Lógica para filtrar canciones
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 3. Manejar la creación de nuevas canciones
  const handleAddSong = (e) => {
    e.preventDefault();
    if (!newSong.title || !newSong.artist) return; // Validación simple

    const songToAdd = {
      ...newSong,
      id: Date.now(), // ID único temporal
      year: newSong.year || "N/A"
    };

    setSongs([...songs, songToAdd]);
    setNewSong({ title: "", artist: "", year: "" }); // Limpiar formulario
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🎵 Songs List App</h1>
      
      {/* SECCIÓN: BUSCADOR */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Buscar por título o artista..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      {/* SECCIÓN: FORMULARIO */}
      <form onSubmit={handleAddSong} style={{ marginBottom: '30px', display: 'flex', gap: '10px' }}>
        <input
          placeholder="Título"
          value={newSong.title}
          onChange={(e) => setNewSong({...newSong, title: e.target.value})}
          style={{ padding: '8px' }}
        />
        <input
          placeholder="Artista"
          value={newSong.artist}
          onChange={(e) => setNewSong({...newSong, artist: e.target.value})}
          style={{ padding: '8px' }}
        />
        <input
          placeholder="Año"
          type="number"
          value={newSong.year}
          onChange={(e) => setNewSong({...newSong, year: e.target.value})}
          style={{ padding: '8px', width: '80px' }}
        />
        <button type="submit" style={{ padding: '8px 15px', cursor: 'pointer', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
          Añadir
        </button>
      </form>

      {/* SECCIÓN: TABLA */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Título</th>
            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Artista</th>
            <th style={{ padding: '12px', borderBottom: '2px solid #ddd' }}>Año</th>
          </tr>
        </thead>
        <tbody>
          {filteredSongs.length > 0 ? (
            filteredSongs.map(song => (
              <tr key={song.id}>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{song.title}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{song.artist}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{song.year}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ padding: '20px', textAlign: 'center', color: '#888' }}>No se encontraron canciones</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;