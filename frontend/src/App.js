import React from 'react';
import Layout from "./Components/Layout.jsx"
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Register from './Pages/Register.jsx';
import Login from "./Pages/Login.jsx";
import Forgate from './Pages/Forgate.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './Route/ProtectedRoute.jsx';
import ContextHolder from "./context/MainContext.jsx"
import Edit from './Pages/Edit.jsx';


const App = () => {
  return (
    <ContextHolder>
      <Layout />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/home' element={<ProtectedRoute Component={Home} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/forgot' element={<Forgate />} />
        <Route path='/reset-password/:token/:id' element={<Edit />} />



      </Routes>

    </ContextHolder>
  )
}

export default App
