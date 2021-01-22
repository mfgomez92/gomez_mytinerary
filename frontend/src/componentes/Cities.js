import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Cities =({cities})=>{ 
    return (
            <>
            {cities.map(({cityCode,cityName,imgCity})=>(
                    <Container  className="my-3">
                        <Row className="justify-content-center py-3 text-white">
                            <Link to={`/cities/${cityCode}`}>
                                <Col key={cityCode} className="foto_carrusel m-2" 
                                style={{backgroundImage: `url(${imgCity})`}}>
                                        <p>{cityName}</p>
                                </Col>
                            </Link>
                        </Row>
                    </Container>))}
            </>
    )}

export default Cities