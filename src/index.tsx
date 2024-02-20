import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StorageProvider } from './hooks/storage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="VF-words/">
      <StorageProvider>
        <App />
      </StorageProvider>
    </BrowserRouter>
  </React.StrictMode>
);