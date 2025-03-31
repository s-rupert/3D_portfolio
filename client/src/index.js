import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Homepage } from './Home';
import { Project } from './Project'
import { Achievement } from './Achievement';
import { Skills } from './Skills';
import { Footer } from './Footer';
function App() {
  return (
    <div id="main-section">
      <Homepage />
      <Project />
      <Achievement />
      <Skills />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
