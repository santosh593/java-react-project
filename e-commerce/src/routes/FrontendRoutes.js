// routes/FrontendRoutes.js
import Home from '../pages/frontend/HomePage';
import Product from '../pages/frontend/ProductDetail';
import FrontendLayout from '../layout/Frontend/FrontendLayout';
import Cart from '../pages/frontend/Cart';
import ProductList from '../pages/frontend/ProductList';
import Login from '../pages/frontend/Login';
import Register from '../pages/frontend/Register';

export const frontendRoutes = {
  path: '/',
  element: <FrontendLayout />,
  children: [
    { path: '', element: <Home /> },
    { path: 'product', element: <Product /> },
    { path: 'cart', element: <Cart /> },
    { path: 'productlist', element: <ProductList /> },
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
  ],
};
