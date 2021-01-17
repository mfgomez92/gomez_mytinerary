import {Carousel, Container, Row} from 'react-bootstrap'

import CarouselFoto from './CarouselFoto'

const CarouselHome = ({elCarrusel}) =>{
     return (
         <Carousel indicators={false}>             
             {elCarrusel.map((array, index)=>{
                return (
                <Carousel.Item key={index}>
                    <Container>
                        <Row className="justify-content-center">
                            <CarouselFoto fotosCarrusel={array} /> 
                        </Row>
                    </Container>
                </Carousel.Item>)
              })} 
         </Carousel>
     )
}

export default CarouselHome