import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <ThreeScene />
    </div>
  );
}

const ThreeScene = () => {
  return (
    <div>Hello 3D World</div>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
