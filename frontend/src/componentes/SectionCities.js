import { connect } from 'react-redux'
import {useEffect} from 'react'
import citiesActions from "../redux/actions/citiesActions";

const SectionCities =(props)=> { 
    
    useEffect(() => {
        props.getCities()
    }, [])

    return  ( 
        <>
            <section className="sectionC">
                <div className="sectionCities">
                    <p>Cities</p>
                    <input type="text" placeholder="Enjoy the experiences, find excursions and tours" onChange={(e)=>props.filtrarCities(e.target.value)} ></input>
                </div>
            </section>
        </>
    )           
}

const mapStateToProps = state => {
    return {
        cities: state.citiesReducer.cities
    }
}
const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    filtrarCities: citiesActions.filtrarCities
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionCities)