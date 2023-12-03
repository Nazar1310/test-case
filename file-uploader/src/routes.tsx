import * as React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayouts';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/errors/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: '/*',
    element: <Navigate to="/404" />
  }
]);
