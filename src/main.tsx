import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const theme = createTheme({
  components: {
    MuiButton: { styleOverrides: { root: { fontSize: '1rem' } } },
    MuiTab: { styleOverrides: { root: { fontSize: '1rem' } } },
  },
});
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
