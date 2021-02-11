import React from 'react';
import Navbar from "../Navbar/Navbar"
import Login from "../Login/Login"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {

  return(
      <React.Fragment>
        <Navbar />
        <Login />
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
      </React.Fragment>
  )
    
}

export default Layout