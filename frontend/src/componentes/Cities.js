import {Container, Row, Col} from 'react-bootstrap'

const Cities =({cities})=>{ 
    return (
            <>
            {cities.map(({ciudad, direccion})=>(
                    <Container  className="my-3">
                        <Row className="justify-content-center py-3 text-white">
                            <Col key={ciudad} className="foto_carrusel m-2" 
                            style={{backgroundImage: `url(${direccion})`}}>
                                    <p>{ciudad}</p>
                            </Col>
                        </Row>
                    </Container>))}
            </>
    )}

export default Cities