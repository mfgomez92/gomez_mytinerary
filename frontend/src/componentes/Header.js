import { IconContext } from "react-icons"
import {BiUserCircle, BiHome, BiWorld} from 'react-icons/bi'
import {NavLink, Link} from "react-router-dom";
import { connect } from 'react-redux'
import React from 'react'
import authActions from '../redux/actions/authActions'
const Header=(props)=>{
    const despliegue = ()=>{
        document.querySelector('#menu_hamburguesa').classList.toggle('active') 
        document.querySelector('#mainListDiv').classList.toggle('show_list') 
    } 
    //Arreglar
    // window.onscroll = ()=> {
    //     window.scrollY > 100? 
    //         document.querySelector('.nav').classList.add('affix'):
    //         document.querySelector('.nav').classList.remove('affix')
    //   };
    
    if (props.loggedUser===null){
        var links= <> 
                    <NavLink to="/login"  className="nav-link">
                        <IconContext.Provider value={{size:'1.25em'}}>
                            <div className="d-flex align-items-center">
                                <BiUserCircle/><div>Login</div>
                            </div>
                        </IconContext.Provider>
                    </NavLink>
                    </>
    }else{
    var links=    
        <>

        </>
    }
    return(
        <>
            <nav className="nav" >
                <div className="container-fluid">
                    <div className="logo">
                        <NavLink to="/" className="navbar-brand">
                            <img  alt="logo" src="/assets/Mytinerary-logo.png"/>
                        </NavLink>
                    </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                            <li>
                                <NavLink to="/" className="nav-link">
                                    <IconContext.Provider value={{size:'1.25em'}}>
                                        <div className="d-flex align-items-center">
                                            <BiHome/><div>Home</div>
                                        </div>
                                    </IconContext.Provider>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cities" className="nav-link">
                                    <IconContext.Provider value={{size:'1.25em'}}>
                                        <div className="d-flex align-items-center">
                                            <BiWorld/><div>Cities</div>
                                        </div>
                                    </IconContext.Provider>
                                </NavLink>
                            </li>
                            <li>
                                {links}
                            </li>
                        </ul>
                    </div>
                    <span className="navTrigger" id="menu_hamburguesa" onClick={despliegue}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
            </nav>


        </>
    )

}

const mapStateToProps = state => {
    return {
        loggedUser: state.authReducer.loggedUser
    }
}

const mapDispatchToProps = {
    logoutUser: authActions.logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
