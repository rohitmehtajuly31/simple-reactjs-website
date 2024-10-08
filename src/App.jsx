import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/home';
import Services from './component/Services';
import About from './component/about';
import './index.css';
import Integration from './component/Integration';
import Inter from './component/Inter';

// Main App component
const App = () => {
  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  );
};

// Layout component for shared UI (like the header)
const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'integration',
        element: <Integration />,
        
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'inter',
        element: <Inter />,
      }
    ],
  },
]);

export default App;
