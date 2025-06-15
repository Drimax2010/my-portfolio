import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/variables.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/reveal.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
