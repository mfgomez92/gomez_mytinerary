import { useEffect } from 'react';
import { connect } from 'react-redux'
import citiesActions from "../redux/actions/citiesActions";


const SectionItineraries =(props)=> { 
    const {cityName,countryName,flag,imgCity,streetView,titleSV} =props.city
    const notItinerary="/assets/not-itinerary.jpg"
     useEffect(()=>{
         props.getCity(props.id)
         props.getItineraries(props.id)
     },[])
  
    console.log(props)
    return  (
        <>
            <section className="sectionI"> 
                <div className="container-fluid m-0 p-0">
                    <div className="row m-0 p-0">
                        <div className="texto_itenerary" >
                                <p>Discover the city of {cityName}, {countryName} </p>
                                <img src={flag} className="flag" alt={countryName}/>
                        </div>
                        <div className="col-7 foto_itenerary" style={{backgroundImage: `url(${imgCity})`}}>
                        </div>
                        <div className="col-5  p-0">
                            <iframe src={streetView} className="street-view" 
                            title={titleSV} allowfullscreen="" aria-hidden="false" ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid d-flex flex-wrap">               
                    <div className="row justify-content-center pt-3 mx-auto">
                        <div key={notItinerary} className="col-5  foto_not_found m-3" style={{backgroundImage: `url(${notItinerary})`}}>
                            <p>New itineraries Coming Soon</p>
                        </div>
                    </div>
            </div>
        </>
    )      
}
const mapStateToProps = state => {
    return {
        city:state.citiesReducer.city,
        activities:state.citiesReducer.activities,
        itineraries: state.citiesReducer.itineraries
    }
}
const mapDispatchToProps = {
    getCity: citiesActions.getCity,
    getItineraries: citiesActions.getItineraries
}
export default connect(mapStateToProps,mapDispatchToProps)(SectionItineraries)




