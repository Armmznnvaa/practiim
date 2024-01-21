import React from 'react'
import Navbar from "../components/Nabvar"

import { Outlet  } from "react-router-dom";
import Footer from '../components/Footer';

const UserRoot = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer/>

    </>
  )
}

export default UserRoot