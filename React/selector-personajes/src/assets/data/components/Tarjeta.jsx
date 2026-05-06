// src/components/Tarjeta.jsx

const Tarjeta = ({ personaje }) => {
  if (!personaje) {
    return (
      <div style={{ marginTop: "20px", color: "gray" }}>
        <h2>Selecciona un personaje</h2>
      </div>
    );
  }

  // Si hay personaje, mostramos su ficha
  return (
    <div style={{
      border: "2px solid #ccc",
      borderRadius: "15px",
      padding: "20px",
      marginTop: "20px",
      textAlign: "center",
      width: "250px"
    }}>
      <div style={{ fontSize: "50px" }}>{personaje.emoji}</div>
      <h2>{personaje.nombre}</h2>
      <p><strong>Arma:</strong> {personaje.arma}</p>
      <p><strong>Ataque:</strong> {personaje.ataque}</p>
      <p><strong>Energía:</strong> {personaje.energia}</p>
    </div>
  );
};

export default Tarjeta;