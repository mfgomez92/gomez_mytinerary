import {NavLink} from "react-router-dom";
import { connect } from 'react-redux'
import authActions from "../redux/actions/authActions";
import {useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {BiCheck} from 'react-icons/bi'
import Footer from './Footer'
import GoogleLogin from 'react-google-login';



const Login = (props) =>{
    useEffect(() => {
        props.getCountries()
    }, [])
    const responseGoogle = (response) => {
        console.log(response);
      }
      
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
                    <div className="col-6 text-center ">
                        <h1>Register</h1>
                        <GoogleLogin
                            clientId="759756529264-mj8c1nc0j1f5ot1jqt4bm91hv3ogo4u1.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        <div className="separator-line">
                            <p>Or register with your email</p> 
                        </div>
                        <input type="text" autocomplete="nope" placeholder="Name" className="admin_input" />
                        <input type="text" autocomplete="nope" placeholder="Last Name" className="admin_input" />
                        <input type="text" autocomplete="nope" placeholder="Your email address" className="admin_input" />
                        <select name="country" id=""  className="admin_input">
                                <option value="" className="admin_input" selected>Select your Country</option>
                                {props.countries && props.countries.map(country => {
                                    return <option className="option-select" value={country.name}>{country.name}</option>
                                })}
                            </select>
                        <input type="password" placeholder="Password for Mytinerary" className="admin_input" />
                        <div className="d-flex justify-content-center">
                            <span  data-toggle="tooltip" data-placement="left" title="At least 6 characters (cannot include spaces or special characters / %)">(?)</span>
                            <p> The password must be at least 6 characters.</p>
                        </div>

                        <Button variant="secondary" className="btn-my mx-auto" >
                            Register
                        </Button>
                        <p>* By entering with Google you are agreeing to receive offers by email</p>
                        <div className="separator-line">
                            <p>Do you already have an account?</p> 
                        </div>
                        <Button variant="primary" className="btn-mx mx-auto" >
                            Login
                        </Button>
                    </div>
                    <div className="col-6 text-center ">
                        <h1>Login</h1>
                        <p>* By entering with Google you are agreeing to receive offers by email</p>
                        <div className="separator-line">
                            <p>Or</p> 
                        </div>
                        <input type="text" autocomplete="nope" placeholder="Your email address" className="admin_input" />
                        <input type="password" placeholder="Password for Mytinerary" className="admin_input" />


                        <Button variant="secondary" className="btn-my mx-auto" >
                            Login
                        </Button>
                        <div className="separator-line">
                            <p>You do not have an account?</p> 
                        </div>
                        <Button variant="primary" className="btn-mx mx-auto" >
                            Register
                        </Button>
                    </div>
               </div>
               <div className="row justify-content-center">
                    <div className="col-6 text-center border">
                        <h3>We keep your email in a 100% secure way to:</h3>
                        <p><BiCheck/>Identify your profile</p>
                        <p><BiCheck/>Notify about new activities and itineraries</p>       
                        <p><BiCheck/>Save itinerary history</p>       
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6 text-center">
                        <p>By registering you are accepting our
                        <NavLink to="/terms-conditions" >
                            Terms and Conditions
                        </NavLink>
and our Privacy Policies</p>
                    </div>
                </div>
           </div>
           <Footer/>
        </>
    )
}
const mapStateToProps = state => {
    return {
        countries: state.authReducer.countries
    }
}


const mapDispatchToProps = {
    getCountries: authActions.getCountries,
}
export default connect(mapStateToProps,mapDispatchToProps)(Login) 