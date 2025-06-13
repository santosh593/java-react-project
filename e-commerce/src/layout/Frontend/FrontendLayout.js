// components/frontend/FrontendLayout.js
import Header from '../../components/frontend/Header';
import Footer from '../../components/frontend/Footer';
import { Outlet } from 'react-router-dom';

const FrontendLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default FrontendLayout;
