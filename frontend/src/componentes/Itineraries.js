import { connect } from "react-redux"
import { Carousel, Container, Row, Button} from "react-bootstrap";
import Rating from '@material-ui/core/Rating';
import {BiMoney, BiHeart} from 'react-icons/bi'
const Itineraries= (props) =>{
   
    return(
        <>
            <div className="container-fluid d-flex flex-wrap p-0">               
                <div className="row justify-content-center mx-auto">                   
                   <div className="col-12 px-2">
                        <Container  className="bg-secondary mt-5 mb-3 rounded">
                            <Row className="justify-content-center py-3 text-white">
                                <h1 className="display-3">Popular Itineraries</h1>
                            </Row>
                        </Container>
                        {props.itineraries.map(itinerary=>{
                            return(
                                <>
                                    <div className="row justify-content-center p-5 mx-auto ">
                                        <div className="col-4">
                                        <Carousel fade={true} controls={false} indicators={false}>
                                        {itinerary.itineraryActivity.map(({activityName, activityPic, index})=>(
                                            <Carousel.Item>
                                                <div key={index} className="foto_carrusel m-2" 
                                                style={{backgroundImage: `url(${activityPic})`}}>
                                                    <p>{activityName}</p>
                                                </div>
                                            </Carousel.Item>    
                                                ))}
                                        </Carousel>
                                        </div>
                                        <div className="col-4 p-5 d-flex flex-column border-bottom border-secondary">
                                            <div className="d-flex justify-content-between border-bottom align-items-center">
                                                <h1 className="font-weight-bold">{itinerary.itineraryName}</h1>
                                                <div>
                                                    <Rating name="primary" icon={<BiMoney/>} name="read-only" value={itinerary.itineraryPrice} readOnly size="large" emptyIcon={<BiMoney/>} />
                                                    <p className="h5">{`Estimated Duration ${itinerary.itineraryDuration}hs.`}</p>
                                                </div>
                                                <Button variant="secondary" className="btn-mz rounded-circle" >
                                                    <BiHeart/>
                                                </Button>
                                            </div>
                                            <p className="h3 mt-3">{itinerary.itineraryDescription}</p>
                                            <div className="d-flex">
                                                {itinerary.itineraryCategory.map(category=>{
                                                   return <p className="h4 bg-secondary m-2 p-1 rounded text-white">#{category}</p>})}
                                            </div>
                                            <Button variant="secondary" className="btn-mz m-auto" >
                                                See all Comments
                                            </Button>
                                            
                                        </div>
                                    </div>
                                </>
                                )   
                            })
                        }
                    </div>
                    <div className="col-12">
                        <Container  className="bg-secondary mt-5 mb-3 rounded">
                            <Row className="justify-content-center py-3 text-white">
                                <h1 className="display-3">Popular Activities</h1>
                            </Row>
                        </Container>
                        {props.activities.map(activity=>{
                            return(
                                <>
                                    <div className="row justify-content-center p-5 mx-auto">
                                        <div className="col-4 fondo_actividad m-3"  style={{backgroundImage: `url(${activity.activityPic})`}}>
                                            
                                        </div>
                                        <div className="col-4 m-3 pt-3">
                                            <h2 className="border-bottom border-secondary font-weight-bold" >{activity.activityName}</h2>
                                            <p className="h3 mt-3">{activity.activityDescription}</p>
                                        </div>
                                    </div>
                                </>
                                )   
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        activities: state.citiesReducer.activities,
        itineraries: state.citiesReducer.itineraries
    }
}

export default connect(mapStateToProps)(Itineraries)