import { IconContext } from "react-icons"
import {BiUserCircle, BiHome, BiWorld} from 'react-icons/bi'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import {NavLink} from "react-router-dom";

const BarraNav=()=>{
    return(
        <>

            <Navbar bg="light" variant="light" expand="lg" className="mb-2 p-2">
                <Container >
                    <Row >
                        <Col md={4}>
                            <NavLink to="/" className="navbar-brand">
                                <img  alt="" src="./assets/Mytinerary-logo.png" className="d-inline-block align-top"/>
                            </NavLink>
                        </Col>
                        <Col md={{ span: 4, offset: 4 }} className="align-self-end">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav>
                                        <NavLink to="/" className="nav-link">
                                            <IconContext.Provider value={{size:'1.75em'}}>
                                                <div className="link_nav">
                                                    <BiHome/>Home
                                                </div>
                                            </IconContext.Provider>
                                        </NavLink>
                                        <NavLink to="/cities" className="nav-link">
                                            <IconContext.Provider value={{size:'1.75em'}}>
                                                <div className="link_nav">
                                                    <BiWorld/>Cities
                                                </div>
                                            </IconContext.Provider>
                                        </NavLink>
                                        <NavLink to="/login" className="nav-link">
                                            <IconContext.Provider value={{size:'1.75em'}}>
                                                <div className="link_nav">
                                                    <BiUserCircle/>Login
                                                </div>
                                            </IconContext.Provider>
                                        </NavLink>
                                    </Nav>
                                </Navbar.Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>


        </>
    )

}

export default BarraNav

//