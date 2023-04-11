import React from 'react';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { Layout } from './components';
import { MainPage, ReservationPage } from './pages';

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Navigate to="/main" replace />,
        },
        {
          path: '/main',
          element: <MainPage />,
        },
        {
          path: '/reservation',
          element: <ReservationPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
