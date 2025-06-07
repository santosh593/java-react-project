// routes/AdminRoutes.js
import Dashboard from '../pages/admin/dashboard/AdminDashboard';
import Category from '../pages/admin/category/Category';
import Product from '../pages/admin/product/AddProduct';
import AdminLayout from '../layout/admin/AdminLayout';

export const adminRoutes = {
  path: '/admin',
  element: <AdminLayout />,
  children: [
    { path: '', element: <Dashboard /> },
    { path: 'category', element: <Category /> },
    { path: 'product', element: <Product /> },
  ],
};
