import React from 'react';

const Hometab = ({ onNavigate }) => {
  return (
    <div className="dashboard-wrapper">
      <header className="dash-header">
        <h1>Good morning, Julianne.</h1>
        <p>Your wellness ecosystem is synchronized. Local humidity: 64%. We've adjusted your morning ritual for optimal balance.</p>
      </header>

      <section className="stats-grid">
        <div className="stat-card">
          <h4>ATMOSPHERIC</h4>
          <h3>UV Index: 4</h3>
          <div className="progress-ring">Moderate exposure. Reapply SPF 30 every 3 hours.</div>
        </div>
        <div className="stat-card">
          <h4>CONSISTENCY</h4>
          <h3>Daily Ritual Streak</h3>
          <h2>12 Days</h2>
        </div>
        <div className="stat-card quote-card">
          <p>"True wellness is the quiet harmony between the choices we make and the intentions we hold."</p>
        </div>
      </section>

      <h2 className="section-header">Curated Disciplines</h2>
      <section className="disciplines-grid">
        <div className="discipline-card" onClick={() => onNavigate('skincare')}>Skincare</div>
        <div className="discipline-card" onClick={() => onNavigate('haircare')}>Haircare</div>
        <div className="discipline-card" onClick={() => onNavigate('selfcare')}>Self-Care</div>
      </section>
    </div>
  );
};

export default Hometab;