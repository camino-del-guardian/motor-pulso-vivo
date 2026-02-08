// Motor de Pulso Vivo - Lógica de generación
function generarMusica() {
  const prompt = document.getElementById('prompt').value;
  const resultadoDiv = document.getElementById('resultado');
  
  if (prompt.length < 10) {
    resultadoDiv.innerHTML = '<p style="color: var(--rojo);">¡Tu promesa necesita más alma! Escribe al menos 10 caracteres.</p>';
    return;
  }

  // Simulación de generación
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const mensaje = `
    <h3>Fragmento Musical Generado:</h3>
    <p><em>"${prompt.substring(0, 100)}..."</em></p>
    <p>🎧 Tu música se está generando... 
       <br>Guarda este código: <strong>PULSO-${timestamp}</strong></p>
    <p>⚠️ Nota: En esta versión, la música se genera fuera de línea. 
       <br>Sube tus audios en la carpeta /musica/</p>
  `;
  
  resultadoDiv.innerHTML = mensaje;
  document.getElementById('prompt').value = '';
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  console.log("Motor de Pulso Vivo activado. Bienvenido, Arquitecto.");
});