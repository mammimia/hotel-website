import React from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';

import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  { path: '/', element: <Home /> },
  { path: '/room/:id', element: <RoomDetails /> }
]);

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
