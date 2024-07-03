// AppWrapper.js

import React from 'react';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import CourseStart from './CourseStart'; // Import your CourseStart component

function AppWrapper() {
    const wallets = [new PhantomWalletAdapter()];

    return (
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <CourseStart />
            </WalletModalProvider>
        </WalletProvider>
    );
}

export default AppWrapper;
