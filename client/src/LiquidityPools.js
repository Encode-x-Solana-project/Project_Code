import React from 'react';
import { Container, Box, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel, Tabs, Tab, AppBar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
const LiquidityPools = ({accounts, setAccounts}) => {
  const isConnected = Boolean(aacounts[0]);

  async function connectWallet() {
    const provider = await window.solana.connect();
    const accounts = await provider.getAccounts();
    setAccounts(accounts);
  }
}

function LiquidityPools() {
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: '#1c1c1c', color: '#fff', padding: 2, borderRadius: 1 }}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: 'none', marginBottom: 2 }}>
        <Tabs value={0} textColor="inherit" indicatorColor="secondary">
          <Tab label="Swap" />
          <Tab label="Liquidity" />
          <Tab label="Portfolio" />
          <Tab label="More" />
          {isConnected ? (
            <p>Connected</p>
          ) : (
          <Button variant="contained" color="secondary" sx={{ marginLeft: 'auto' }} onClick={connectWallet}>Connect Wallet</Button>
          )}
        </Tabs>
      </AppBar>

      <Typography variant="h4" gutterBottom>Liquidity Pools</Typography>
      <Typography variant="subtitle1" gutterBottom>Provide liquidity, earn yield.</Typography>

      <Box display="flex" justifyContent="space-between" mb={2}>
        <Tabs value={0} textColor="inherit" indicatorColor="secondary">
          <Tab label="Concentrated" />
          <Tab label="Standard" />
          <Tab label="All" />
        </Tabs>
        <Button variant="contained" color="secondary">Create</Button>
      </Box>

      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          variant="outlined"
          placeholder="Search all"
          sx={{ backgroundColor: '#333', borderRadius: 1, input: { color: '#fff' } }}
          InputProps={{
            endAdornment: (
              <Button variant="contained" color="secondary" sx={{ minWidth: 'auto', padding: 1 }}>
                <i className="fas fa-sliders-h"></i>
              </Button>
            )
          }}
          fullWidth
        />
      </Box>

      <TableContainer component={Paper} sx={{ backgroundColor: '#2a2a2a' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#999' }}>Pool</TableCell>
              <TableCell sx={{ color: '#999' }}>Liquidity</TableCell>
              <TableCell sx={{ color: '#999' }}>Volume 24H</TableCell>
              <TableCell sx={{ color: '#999' }}>Fees 24H</TableCell>
              <TableCell sx={{ color: '#999' }}>APR 24H</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              { pair: 'SOL-USDT', liquidity: '$943,691', volume: '$31,100,669', fees: '$3,110', apr: '136.62%' },
              { pair: 'USDC-USDT', liquidity: '$2,865,888', volume: '$24,042,791', fees: '$2,404', apr: '34.20%' }
            ].map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.pair}</TableCell>
                <TableCell>{row.liquidity}</TableCell>
                <TableCell>{row.volume}</TableCell>
                <TableCell>{row.fees}</TableCell>
                <TableCell>{row.apr}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary">Deposit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default LiquidityPools;
