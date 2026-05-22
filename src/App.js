import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className={`splash-screen ${!loading ? 'fade-out' : ''}`}>
        <h1 className="brand-logo">auracare</h1>
      </div>
      
      <div className="app-container">
        <div className="top-bar">
          <div className="brand-name">AuraCare AI</div>
          <div className="nav-tabs">
            <span className="active">Skincare</span>
            <span>Haircare</span>
            <span>Self-Care</span>
          </div>
        </div>

        <header className="dash-header">
          <h1>Good morning, Julianne.</h1>
          <p>Your wellness ecosystem is synchronized.</p>
        </header>
        
        <div className="stats-grid">
          <div className="card">
            <h4>Atmospheric</h4>
            <h3>UV Index: 4</h3>
          </div>
          <div className="card">
            <h4>Consistency</h4>
            <h3>12 Days</h3>
          </div>
          <div className="card">
            <h4>Insight</h4>
            <h3>"True wellness is the quiet harmony."</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;