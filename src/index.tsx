import './tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from 'AppRoutes';
import { ThemeProvider } from 'features';

const rootElement = ReactDOM.createRoot(
  document.querySelector('#root') as Element
);

rootElement.render(
  <ThemeProvider>
    <Router>
      <AppRoutes />
    </Router>
  </ThemeProvider>
);
