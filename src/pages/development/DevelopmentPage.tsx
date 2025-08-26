import React from 'react';
import { Outlet } from 'react-router-dom';
import DevelopmentSidebar from '../../components/DevelopmentSidebar';

const DevelopmentPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-background">
      <DevelopmentSidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DevelopmentPage;