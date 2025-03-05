import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Homepage } from './Home';
import { Project } from './Project'
import { Achievement } from './Achievement';
import { Skills } from './Skills';
import { Footer } from './Footer';
import { Test } from './Test';
function App() {
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        window.location.reload();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div id="main-section">
      <Homepage />
      <Project />
      <Achievement />
      <Skills />
      <Footer />
      {/* <Test /> */}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
