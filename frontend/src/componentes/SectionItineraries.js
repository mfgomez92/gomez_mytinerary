import { useEffect } from 'react';
import { connect } from 'react-redux'
import citiesActions from "../redux/actions/citiesActions";


const SectionItineraries =(props)=> { 
    
    const {cityName,countryName,flag,imgCity,streetView,titleSV} =props.city[0]
    const notItinerary="/assets/not-itinerary.jpg"
    useEffect(()=>{
        props.getCity(props.id)
    },[])
    console.log(props.city[0])
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
        {/* {aca se tienen q renderizar cada ciudad poputlate con sus actividades, para eso tengo q modificar en el controlador cityController.singleCity, me tiene la ciudad con sus actividades e itinerarios} */}
        </>
    )      
}
const mapStateToProps = state => {
    return {
        cities: state.citiesReducer.cities,
        city:state.citiesReducer.city
    }
}
const mapDispatchToProps = {
    getCity: citiesActions.getCity,
}
export default connect(mapStateToProps,mapDispatchToProps)(SectionItineraries)




