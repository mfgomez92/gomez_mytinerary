import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

const Cities =(props)=>{ 
    const direccion="./assets/banner_not_found.jpg"
    return (
            <>
                <div className="container-fluid mt-5 d-flex flex-wrap">               
                    <div className="row justify-content-center pt-3 mx-auto">
                        {
                        props.citiesFiltradas.length===0?
                            <div key={direccion} className="col-5  foto_not_found m-3" style={{backgroundImage: `url(${direccion})`}}>
                                <p>Sorry, we couldn't find "{props.notResults}"</p>
                            </div>
                                                :
                            props.citiesFiltradas.map(({_id, imgCity, cityName}, index)=>(
                                <Link to={`/cities/${_id}`} key={index}  className="text-decoration-none col-5 m-3">
                                    <div className=" foto_carrusel" style={{backgroundImage: `url(${imgCity})`}}>
                                            <p>{cityName}</p>
                                    </div>
                                </Link>))}
                    </div> 
                </div>        
            </>
    )}
const mapStateToProps = state => {
    return {
        citiesFiltradas: state.citiesReducer.citiesFiltradas,
        notResults: state.citiesReducer.notResults
    }
}

export default connect(mapStateToProps)(Cities)