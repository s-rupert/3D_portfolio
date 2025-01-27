import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Timer } from './Timer';
import { ThreeScene } from './AirCraft';
import { Homepage } from './Home';
import { Project }  from './Project'
function App() {
    return (
      <div id="main-section">
        <Homepage />
        <ThreeScene  id="aircraft"/>
        <Project />
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  