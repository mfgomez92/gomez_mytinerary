import {Col} from 'react-bootstrap'

const CarouselFoto =({fotosCarrusel})=>{
    
    return (
        fotosCarrusel.map(({direccion,ciudad})=>(
            <Col key={ciudad} xs="5" lg="5" className="foto_carrusel m-2" style={{backgroundImage: `url(${direccion})`}}>
                <p>{ciudad}</p>
            </Col>))
            )
}

export default CarouselFoto
