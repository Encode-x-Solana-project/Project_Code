import React from 'react';
import { Container, Box, Typography, Button, Tabs, Tab, AppBar, Paper, Divider, Select, MenuItem } from '@mui/material';

function Portfolio() {
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: '#1c1c1c', color: '#fff', padding: 2, borderRadius: 1 }}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: 'none', marginBottom: 2 }}>
        <Tabs value={2} textColor="inherit" indicatorColor="secondary">
          <Tab label="Swap" />
          <Tab label="Liquidity" />
          <Tab label="Portfolio" />
          <Tab label="More" />
          <Button variant="contained" color="secondary" sx={{ marginLeft: 'auto' }}>Connect Wallet</Button>
        </Tabs>
      </AppBar>

      <Typography variant="h4" gutterBottom>My Portfolio</Typography>

      <Typography variant="h6" gutterBottom>Overview</Typography>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Paper sx={{ padding: 2, backgroundColor: '#2a2a2a', borderRadius: 1, flex: 1, marginRight: 2 }}>
          <Typography variant="h6" gutterBottom>Assets by pool</Typography>
          <Box display="flex" alignItems="center">
            <div style={{ width: 100, height: 100, borderRadius: '50%', backgroundColor: '#6a1b9a', marginRight: 2 }} />
            <Typography variant="h5">$0</Typography>
          </Box>
        </Paper>
        <Paper sx={{ padding: 2, backgroundColor: '#2a2a2a', borderRadius: 1, flex: 1, marginRight: 2 }}>
          <Typography variant="h6" gutterBottom>Assets by token</Typography>
          <Select variant="outlined" value="All" sx={{ backgroundColor: '#333', color: '#fff' }}>
            <MenuItem value="All">All</MenuItem>
          </Select>
        </Paper>
        <Paper sx={{ padding: 2, backgroundColor: '#2a2a2a', borderRadius: 1, flex: 1 }}>
          <Typography variant="h6" gutterBottom>Idle tokens</Typography>
          <Typography variant="h5">$0</Typography>
        </Paper>
      </Box>

      <Divider sx={{ backgroundColor: '#333', marginBottom: 2 }} />

      <Typography variant="h6" gutterBottom>My positions</Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Tabs value={0} textColor="inherit" indicatorColor="secondary">
          <Tab label="Concentrated" />
          <Tab label="Standard" />
          <Tab label="Staked RAY" />
        </Tabs>
        <Box display="flex" alignItems="center">
          <Typography variant="body1" sx={{ marginRight: 2 }}>Pending Yield: 0</Typography>
          <Button variant="contained" color="secondary">Harvest All</Button>
        </Box>
      </Box>

      <Paper sx={{ padding: 2, backgroundColor: '#2a2a2a', borderRadius: 1, textAlign: 'center' }}>
        <Typography variant="body1" gutterBottom>You don’t have any concentrated liquidity positions.</Typography>
        <Button variant="contained" color="secondary">Go to pools</Button>
      </Paper>
    </Container>
  );
}

export default Portfolio;
