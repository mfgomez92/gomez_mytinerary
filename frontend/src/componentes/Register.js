import GoogleLogin from 'react-google-login'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import authActions from "../redux/actions/authActions"
import {useEffect, useState} from 'react'


const Register =(props)=>{
    const responseGoogle = (response) => {
        props.loginWithGoogle(response.profileObj);
      }
    useEffect(() => {
        props.getCountries()
    }, [])
    //Usuario a cargar en la db
    var [newUser, setNewUser] = useState({
        name:"",
        lastName:"",
        username:"",
        password:"",
        country:""
    })
    //capturador de los valores de los inputs 
    const handleChange = (e) => {
        const { name, value } = e.target
        setNewUser({ ...newUser,[name]: value })
      }

    const [pathImage, setPathImage]= useState('/assets/avatar.png')
    const [file, setFile] = useState()
    //Funcion para previsualizar imagenes
    const onFileChange= e =>{
        if(e.target.files && e.target.files.length > 0){
            const file = e.target.files[0]
            if(file.type.includes('image')){
                const reader = new FileReader()
                reader.readAsDataURL(file)

                reader.onload= function load(){
                    setPathImage(reader.result)
                }
                setFile(file)
            }else{
                console.log('tuvimos un error')
            }
        }
    }
    //Funcion para enviar la informacion a la db
    const  sendUser= e =>{
            e.preventDefault()
            props.newUser(newUser, file)
        }
    return(
        <>
            <h1>Register</h1>
            <GoogleLogin 
                className="login_input justify-content-center"
                clientId="759756529264-mj8c1nc0j1f5ot1jqt4bm91hv3ogo4u1.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <div className="separator-line">
                <span className="text">Or register with your email</span>
                <span className="line mx-auto"></span> 
            </div>
            <input type="text" autocomplete="nope" placeholder="Name" name="name" 
            onChange={(e)=>handleChange(e)} className="admin_input" required/>
            <input type="text" autocomplete="nope" placeholder="Last Name" name="lastName"
            onChange={(e)=>handleChange(e)} className="admin_input" required/>
            <input type="text" autocomplete="nope" placeholder="Your email address" name="username"
            onChange={(e)=>handleChange(e)}  className="admin_input" required/>
            <select name="country" onChange={(e)=>handleChange(e)} className="admin_input p-1">
                <option value="" className="admin_input" selected>Select your Country</option>
                {props.countries && props.countries.map(country => {
                    return <option className="option-select" value={country.name}>{country.name}</option>
                })}
            </select>
            <input type="password" placeholder="Password for Mytinerary" name="password"
            onChange={(e)=>handleChange(e)} className="admin_input" required/>
            <div className="d-flex justify-content-center">
                <span  data-toggle="tooltip" data-placement="left" title="At least 6 characters (cannot include spaces or special characters / %)">(?)</span>
                <p> The password must be at least 6 characters.</p>
            </div>
            <label for="profile-pic" className="label_input_file" >
                <div className="d-flex flex-column align-items-center">
                <p>Select your Profile picture</p> 
                    <img className="img-fluid profile-pic-register" src={pathImage} alt="profile-pic"/>
                </div>
            </label>
            <input type="file" id="profile-pic" className="admin_input input-file"
            name="file" onChange={onFileChange} required/>
            <Button variant="secondary" className="admin_input mx-auto"
            type="submit" onClick={sendUser} >
                Register
            </Button>
            <p>* By entering with Google you are agreeing to receive offers by email</p>
            <div className="separator-line">
                <span>Do you already have an account?</span>
                <span className="line mx-auto"></span> 
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        countries: state.authReducer.countries,
        loggedUser: state.authReducer.loggedUser
    }
}


const mapDispatchToProps = {
    getCountries: authActions.getCountries,
    newUser: authActions.newUser,
    loginWithGoogle: authActions.loginWithGoogle,
}
export default connect(mapStateToProps,mapDispatchToProps)(Register) 
