import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App (){
  return(
    <div>Hello World!</div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
