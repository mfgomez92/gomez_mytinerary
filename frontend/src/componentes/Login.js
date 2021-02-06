import GoogleLogin from 'react-google-login';
import {Button} from 'react-bootstrap'

const Login=()=>{
    const responseGoogle = (response) => {
        console.log(response);
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
            <input type="text" autocomplete="nope" placeholder="Your email address" className="admin_input" />
            <input type="password" placeholder="Password for Mytinerary" className="admin_input" />
            <Button variant="secondary" className="admin_input mx-auto mt-4" >
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
export default Login