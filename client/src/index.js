import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Timer } from './Timer';
import { ThreeScene } from './AirCraft';
import { Homepage } from './Home';
function App() {
    return (
      <div>
        {/* <Timer /> */}
        <Homepage />
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  