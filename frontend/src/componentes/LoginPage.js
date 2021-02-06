import {NavLink} from "react-router-dom";

import {Button} from 'react-bootstrap'
import {BiCheck} from 'react-icons/bi'
import Footer from './Footer'
import React, { useState } from 'react';
import Login from './Login'
import Register from './Register'


const LoginPage = () =>{
    const [show, setShow] = useState(true);
    return(
        <>
            <nav className="nav-login" >
                <div className="container-fluid d-flex justify-content-center">
                    <div className="logo">
                        <NavLink to="/" className="navbar-brand">
                            <img  alt="logo" src="/assets/Mytinerary-logo.png"/>
                        </NavLink>
                    </div>
                </div>
            </nav>
           <div className="container mt-4">
               <div className="row justify-content-center">
                   <div className="col-6 text-center">
                        {!show? <Register/>:<Login/> }
                        <Button variant="primary" className="admin_input mx-auto" onClick={() => {setShow(!show);}}>
                            {show ? 'Register' : 'Login'}
                        </Button>
                   </div>
               </div>
               <div className="row justify-content-center mt-3">
                    <div className="col-6 text-center">
                        <h3>We keep your email in a 100% secure way to:</h3>
                        <p className="h4"><BiCheck/>Identify your profile</p>
                        <p className="h4"><BiCheck/>Notify about new activities and itineraries</p>       
                        <p className="h4"><BiCheck/>Save itinerary history</p>       
                    </div>
                </div>
               <div className="row justify-content-center">
                    <div className="col-6 text-center">
                        <p className="h6">By registering you are accepting our{" "} 
                        <NavLink to="/terms-conditions" >
                            Terms and Conditions
                        </NavLink>
                        {" "}and our Privacy Policies</p>
                    </div>
                </div>
           </div>
           <Footer/>
        </>
    )
}
export default LoginPage

