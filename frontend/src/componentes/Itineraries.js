import { connect } from "react-redux"
import {Container, Row} from "react-bootstrap";
import Itinerary from "./Itinerary";

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
                        {props.itineraries.map((itinerary, index)=> <Itinerary key={index} itinerary={itinerary}/>)}
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
        itineraries: state.citiesReducer.itineraries,
        comment: state.commentReducer.comment

    }
}

export default connect(mapStateToProps)(Itineraries)