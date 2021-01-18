import {Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from "react-router-dom";


const CallToAction =()=> { 
    return  <Container className="fondo ">
                <Row className="justify-content-end px-5">
                    <Col xs lg="4" className="centrado hover-lento">
                        <p  className="fs-3">Find your perfect trip, designed by insiders who know and love their cities</p>
                        <Link to="/cities">
                            <Button variant="secondary" size="lg" className="align-self-end" >
                                Discover
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            
}

export default CallToAction