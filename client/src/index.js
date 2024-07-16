import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import '@solana/wallet-adapter-react-ui/styles.css'; // Import the CSS file
import AppWrapper from './AppWrapper';

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper/>
  </React.StrictMode>,
  document.getElementById('root')
);
