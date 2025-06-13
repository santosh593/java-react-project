// components/admin/AdminLayout.js
import AdminHeader from '../../components/admin/Header';
import AdminFooter from '../../components/admin/Footer';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => (
  <>
    <AdminHeader />
    <Outlet />
    <AdminFooter />
  </>
);

export default AdminLayout;
