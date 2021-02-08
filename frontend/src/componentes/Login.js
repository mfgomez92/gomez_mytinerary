import GoogleLogin from 'react-google-login';
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import authActions from "../redux/actions/authActions"
import {useState} from 'react'


const Login=(props)=>{
    const responseGoogle = (response) => {
        props.loginWithGoogle(response.profileObj);
      }
    //Usuario a loguearse
    var [loginUser, setLoginUser] = useState({
        username:"",
        password:"",
    })
    //capturo valores de los inputs
    const handleChange = (e) => {
        const { name, value } = e.target
        setLoginUser({ ...loginUser,[name]: value })
      }
    //Funcion para confirmar el login
    const  sendUser= e =>{
        e.preventDefault()
        props.loginUser(loginUser)
    }
    return(
        <>
            <h1>Login</h1>
            <GoogleLogin
                className="login_input justify-content-center"
                clientId="759756529264-mj8c1nc0j1f5ot1jqt4bm91hv3ogo4u1.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <div className="separator-line">
                <span>Or</span> 
                <span className="line mx-auto"></span> 
            </div>
            <input type="text" autocomplete="nope" placeholder="Your email address" className="admin_input" name="username"
            onChange={(e)=>handleChange(e)}/>
            <input type="password" placeholder="Password for Mytinerary" className="admin_input" name="password"
            onChange={(e)=>handleChange(e)} />
            <Button variant="secondary" className="admin_input mx-auto mt-4" type="submit" onClick={sendUser} >
                Login
            </Button>
            <p>* By entering with Google you are agreeing to receive offers by email</p>
            <div className="separator-line">
                <span>You do not have an account?</span>
                <span className="line mx-auto"></span> 
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        loggedUser: state.authReducer.loggedUser
    }
}


const mapDispatchToProps = {
    loginWithGoogle: authActions.loginWithGoogle,
    loginUser: authActions.loginUser,
}
export default connect(mapStateToProps,mapDispatchToProps)(Login) 