import logo from './SolaringLogoDef.svg';
import './App.css';
import Footer from './Footer';
import LiquidityPools from './LiquidityPools';
import Portfolio from './Portfolio';
import AppWrapper from './AppWrapper';
import {useState} from 'react';
import Footer from './Footer';

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div>
      <LiquidityPools accounts={accounts} setAccounts={setAccounts} />
      <Portfolio accounts={accounts} setAccounts={setAccounts}/>     
      <Footer />
    </div>
 

  );
}

export default App;
