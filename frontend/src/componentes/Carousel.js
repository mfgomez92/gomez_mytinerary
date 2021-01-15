import {Carousel} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'

import CarouselFoto from './CarouselFoto'

const CarouselSection = ({elCarrusel}) =>{
     return (
         <Carousel indicators={false}  fade={true}>             
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

export default CarouselSection