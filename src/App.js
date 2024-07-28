import React from 'react';

function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6,
      margin: 0,
      padding: '20px',
      backgroundColor: '#f4f4f4',
      minHeight: '100vh',
    }}>
      <div style={{
        maxWidth: '800px',
        margin: 'auto',
        background: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}>
        <h1 style={{ color: '#333' }}>Bienvenido a mi página de GitHub Pages</h1>
        <p>Esta es una página web simple creada por tobiny usando React.</p>
        <p>Estoy aprendiendo a usar GitHub Pages y React para publicar mis proyectos en línea.</p>
      </div>
    </div>
  );
}

export default App;