import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const FrLayout = () => {
  return (
    <div className="flex flex-col ">
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
};

export default FrLayout;
