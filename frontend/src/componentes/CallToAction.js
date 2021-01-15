import {Container, Button,Image} from 'react-bootstrap'
import {Link} from "react-router-dom";


const CallToAction =()=> { 
    return  <Container>
                    <div className="contenedor">
                        <Image src="./assets/millennialsviaje.jpg" fluid className="hover-lento"/>
                        <div className="centrado">
                            <h4 >Find your perfect trip, designed by insiders who know and love their cities</h4>
                            <Link to="/cities">
                                <Button variant="outline-secondary" size="lg" className="align-self-end" >
                                    Discover
                                </Button>
                            </Link>

                        </div>
                    </div>
            </Container>
            
}

export default CallToAction