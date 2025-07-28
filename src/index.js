import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import AppContextProvider from './context/AppContextProvider';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>


);
