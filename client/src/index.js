import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Timer } from './Timer';
import { ThreeScene } from './AirCraft';
import { Homepage } from './Home';
import { Project } from './Project'
import { Achievement } from './Achievement';
function App() {
  return (
    <div id="main-section">
      <img id="background" src="Background.png" />
      <Homepage />
      <ThreeScene id="aircraft" />
      <Project />
      <Achievement />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
