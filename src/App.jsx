import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/home';
import Services from './component/Services';
import About from './component/about';

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
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
    ],
  },
]);

export default App;
