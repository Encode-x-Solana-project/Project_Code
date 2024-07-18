import React from 'react';
import ReactDOM from 'react-dom/client';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const wallets = [new PhantomWalletAdapter()];
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      
      <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
    <App />
    </WalletModalProvider>
    </WalletProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();