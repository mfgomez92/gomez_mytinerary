import {NavLink} from "react-router-dom";

const Terms = () =>{
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
        </>
    )
}
export default Terms