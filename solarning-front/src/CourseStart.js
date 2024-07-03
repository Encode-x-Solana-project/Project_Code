// CourseStart.js

import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const modules = [
    { title: 'Crypto Fundamentals', description: 'Learn the basics of cryptocurrencies.' },
    { title: 'DeFi Tutorial', description: 'Dive into decentralized finance.' },
    { title: 'Trivia Game', description: 'Test your knowledge with fun quizzes.' }
];

function CourseStart() {
    const { connected, publicKey } = useWallet();
    const [progress, setProgress] = useState({});

    useEffect(() => {
        if (connected) {
            fetchUserProgress();
        }
    }, [connected]);

    const fetchUserProgress = async () => {
        const userProgress = {
            'Crypto Fundamentals': 50,
            'DeFi Tutorial': 0,
            'Trivia Game': 0
        };
        setProgress(userProgress);
    };

    return (
        <div style={styles.container}>
            {!connected ? (
                <div style={styles.connectContainer}>
                    <h2>Welcome to Solana Learning Platform</h2>
                    <WalletMultiButton style={styles.walletButton} />
                </div>
            ) : (
                <div>
                    <h2>Welcome, {publicKey.toString()}</h2>
                    <div style={styles.modulesContainer}>
                        {modules.map((module, index) => (
                            <div key={index} style={styles.moduleCard}>
                                <h3>{module.title}</h3>
                                <p>{module.description}</p>
                                <div style={styles.progressContainer}>
                                    <div style={{ ...styles.progressBar, width: `${progress[module.title] || 0}%` }}></div>
                                </div>
                                <button style={styles.startButton}>Start/Continue</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px'
    },
    connectContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    walletButton: {
        marginTop: '20px'
    },
    modulesContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
    },
    moduleCard: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        width: '300px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        textAlign: 'left'
    },
    progressContainer: {
        height: '10px',
        backgroundColor: '#f3f3f3',
        borderRadius: '5px',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: '10px'
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#4caf50'
    },
    startButton: {
        backgroundColor: '#4caf50',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
    }
};

export default CourseStart;
