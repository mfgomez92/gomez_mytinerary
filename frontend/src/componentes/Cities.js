import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Cities =({cities})=>{ 
    return (
            <>
            {cities.map(({ciudad, direccion})=>(
                    <Container  className="my-3">
                        <Row className="justify-content-center py-3 text-white">
                            <Link to={`/cities/${ciudad}`}>
                                <Col key={direccion} className="foto_carrusel m-2" 
                                style={{backgroundImage: `url(${direccion})`}}>
                                        <p>{ciudad}</p>
                                </Col>
                            </Link>
                        </Row>
                    </Container>))}
            </>
    )}

export default Cities