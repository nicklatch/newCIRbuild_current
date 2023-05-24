import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './errorPage';
import About from './routes/About';
import Points from './routes/Points';
import Rules from './routes/Rules';
import Schedule from './routes/Schedule';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'points',
        element: <Points />,
      },
      {
        path: 'rules',
        element: <Rules />,
      },
      {
        path: 'schedule',
        element: <Schedule />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
