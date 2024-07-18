import React from 'react';
import Header from './Header';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import './App.css';

const CourseStart = lazy(() => import('./CourseStart'));
const WalletExplanation = lazy(() => import('./WalletExplanation'));
const Dex = lazy(() => import('./Dex'));
const NoMatch = lazy(() => import('./NoMatch'));



const App = () => {

  return (
    <div>
          <>
      <Header />
      <Suspense fallback={<div className="container">Loading...</div>}>
      <Router>
          <Routes>
             <Route path="/" element={<CourseStart />} />
             <Route path="/wallet-explanation" element={<WalletExplanation />} />
             <Route path="/dex" element={<Dex />} />
             <Route path="*" element={<NoMatch />} />
          </Routes>
          </Router>
       </Suspense>
      <Footer />
      </>
    </div>
 
  );
}

export default App;
