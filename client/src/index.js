import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Homepage } from './Home';
import { Project } from './Project'
import { Achievement } from './Achievement';
function App() {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     window.location.reload();
  //   }, 10000); // 60000 milliseconds = 1 minute

  //   // Cleanup the interval when the component unmounts
  //   return () => clearInterval(interval);
  // }, []);
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
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
