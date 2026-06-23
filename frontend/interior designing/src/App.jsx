import { useContext } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Category from './pages/catergory';
import Reg from './component/user';
import Login from './component/login';
import Navbar from './component/navbar';
import { LogContext } from './context/logincontext';
import Home from './pages/homepanel/home';
import Theme from './pages/Theme/themes';
import Type from './pages/Theme/themetype';
import Appoinmnet from './pages/Appoinment/appoinment';
import Contact from './pages/contact/contact';
import AdminLayout from './pages/adminpanel/adminLayout';
import Dashboard from './pages/adminpanel/admindashboard';
import ManageDesign from './pages/adminpanel/managedesign';
import ManageAppointment from './pages/adminpanel/manageappointment';
import ManageContact from './pages/adminpanel/managecontact';
import Profile from './pages/profile/profile';
import UserApponintment from './pages/profile/userProfileApp';
import Footer from './pages/footer/footer';
import DesignDetails from './pages/Theme/designdetail';

function App() {
  const { Log } = useContext(LogContext);
  console.log(Log);

  const location = useLocation();

  // ✅ Check if current route is admin
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {/* ✅ Hide Navbar on admin pages */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* User Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/reg' element={<Reg />} />
        <Route path='/login' element={<Login />} />
        <Route path='/theme' element={<Theme />} />
        <Route path='/type/:theme' element={<Type />} />
        <Route path="/design/:id" element={<DesignDetails/>} />
        <Route path='/appoinmnet' element={<Appoinmnet />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/UserApponintment' element={<UserApponintment/>} />

        {/* Admin Routes */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='designs' element={<ManageDesign />} />
          <Route path='appointments' element={<ManageAppointment />} />
          <Route path='contacts' element={<ManageContact />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  );
}

export default App;