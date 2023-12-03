import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import '../../assets/scss/dasboard.scss';
import Navbar from './NavBar';

const DashboardLayout: FC = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
