import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const FrLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 overflow-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default FrLayout;
