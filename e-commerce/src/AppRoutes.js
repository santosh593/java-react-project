import React from 'react'
import { useRoutes } from 'react-router-dom';
import { frontendRoutes } from './routes/FrontendRoutes';
import { adminRoutes } from './routes/AdminRoutes';

const AppRoutes = () => {
  return useRoutes([
    frontendRoutes,
    adminRoutes
  ]);
}

export default AppRoutes
