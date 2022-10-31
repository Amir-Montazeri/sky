import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { addLazy } from 'methods';

const Auth = React.lazy(() => import('pages/auth'));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth/:type" element={addLazy(<Auth />)} />
    </Routes>
  );
}

export default AppRoutes;
