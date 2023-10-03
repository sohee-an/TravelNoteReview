import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';
const theme = createTheme({
  components: {
    MuiButton: { styleOverrides: { root: { fontSize: '1rem' } } },
    MuiTab: { styleOverrides: { root: { fontSize: '1rem' } } },
  },
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
