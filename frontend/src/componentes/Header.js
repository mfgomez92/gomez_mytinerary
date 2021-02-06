import { IconContext } from "react-icons"
import {BiUserCircle, BiHome, BiWorld} from 'react-icons/bi'
import {NavLink} from "react-router-dom";


const Header=()=>{
    const despliegue = ()=>{
        document.querySelector('#menu_hamburguesa').classList.toggle('active') 
        document.querySelector('#mainListDiv').classList.toggle('show_list') 
    } 
    window.onscroll = ()=> {
        window.scrollY > 100? 
            document.querySelector('.nav').classList.add('affix'):
            document.querySelector('.nav').classList.remove('affix')
      };

    
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
                                <NavLink to="/login"  className="nav-link">
                                    <IconContext.Provider value={{size:'1.25em'}}>
                                        <div className="d-flex align-items-center">
                                            <BiUserCircle/><div>Login</div>
                                        </div>
                                    </IconContext.Provider>
                                </NavLink>
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

export default Header
