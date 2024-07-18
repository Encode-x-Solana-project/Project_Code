import React from 'react';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseStart from './CourseStart'; // Import your CourseStart component
import WalletExplanation from './WalletExplanation';

const AppWrapper: React.FC = () => {
    const wallets = [new PhantomWalletAdapter()];

    return (
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<CourseStart />} />
                        <Route path="/wallet-explanation" element={<WalletExplanation />} />
                    </Routes>
                </Router>
            </WalletModalProvider>
        </WalletProvider>
    );
}

export default AppWrapper;
