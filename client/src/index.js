import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ThreeScene } from './AirCraft';
import { Island } from './Island';
function App() {
    return (
      <div>
        {/* <ThreeScene/> */}
        <Island/>
      </div>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  