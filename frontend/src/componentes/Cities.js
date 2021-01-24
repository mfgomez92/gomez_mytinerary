import {Link} from 'react-router-dom'

const Cities =(props)=>{ 
    const direccion="./assets/banner_not_found.jpg"
    return (
            <>
                <div className="container-fluid mt-5 d-flex flex-wrap">               
                    <div className="row justify-content-center pt-3 mx-auto">
                        {
                        props.cities.length===0?
                            <div key={direccion} className="col-5  foto_not_found m-3" style={{backgroundImage: `url(${direccion})`}}>
                                <p>Sorry, we couldn't find "{props.notResults}"</p>
                            </div>
                                                :
                            props.cities.map((city, index)=>(
                                <Link to={`/cities/${city.cityCode}`} key={index}  className="text-decoration-none col-5 m-3">
                                    <div className=" foto_carrusel" style={{backgroundImage: `url(${city.imgCity})`}}>
                                            <p>{city.cityName}</p>
                                    </div>
                                </Link>))}
                    </div> 
                </div>        
            </>
    )}

export default Cities