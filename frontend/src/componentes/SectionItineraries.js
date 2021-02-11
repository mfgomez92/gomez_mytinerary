import { useEffect } from 'react';
import { connect } from 'react-redux'
import citiesActions from "../redux/actions/citiesActions";
import NotItineraries from "./NotItineraries"
import Itineraries from "./Itineraries";



const SectionItineraries =(props)=> { 
    const {cityName,countryName,flag,imgCity,streetView,titleSV} =props.city
    const valor = props.activities.length
     useEffect(()=>{
         fetchear_data()
     },[props.id, props.comment, props.like])
     async function fetchear_data() {
        await props.getItineraries(props.id)
        await props.getCity(props.id)   
     }    
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
            {valor===0 ? <NotItineraries/>:<Itineraries/>}
        </>
    )      
}
const mapStateToProps = state => {
    return {
        city:state.citiesReducer.city,
        activities:state.citiesReducer.activities,
        itineraries: state.citiesReducer.itineraries,
        comment: state.commentReducer.comment,
        like: state.likeReducer.like
    }
}
const mapDispatchToProps = {
    getCity: citiesActions.getCity,
    getItineraries: citiesActions.getItineraries
}
export default connect(mapStateToProps,mapDispatchToProps)(SectionItineraries)




