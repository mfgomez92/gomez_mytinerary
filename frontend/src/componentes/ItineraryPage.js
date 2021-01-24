import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {Button} from 'react-bootstrap'
import Header from './Header'
import SectionItinerary from './SectionItinerary'
import Footer from './Footer'


const ItineraryPage =(props)=>{
    const [cityItinerary, setCityItenerary]= useState([])
    //capturo :city de la url del navegador
    const city= props.match.params.city
    useEffect(()=>{
        //le pego a la api con el metodo get
        fetch('http://localhost:4000/cities/'+city)
        .then(response => response.json())
        .then(data => setCityItenerary(data.response))
    },[city])

  
    return(
        <>
        <Header/>
        <SectionItinerary cityItinerary={cityItinerary}/>
        <div className="container text-center mt-5">
            <Link to="/" className="m-3" >
                <Button variant="secondary" className="btn-my" >
                back to Home
                </Button>
            </Link>
            <Link to="/cities">
                <Button variant="secondary" className="btn-my" >
                back to Cities
                </Button>
            </Link>
        </div>
        <Footer/>

       </> 
    ) 
    
}
export default ItineraryPage