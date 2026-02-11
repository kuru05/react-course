import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './components/Layouts/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

fetch("http://localhost:3001/get-products").then(res => res.json()).then(data => {
  console.log(data);
  root.render(
    <React.StrictMode>
      <App name="Merlin" age={20} products={data} />
    </React.StrictMode>
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
