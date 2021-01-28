import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {Button} from 'react-bootstrap'
import {BiHome, BiWorld} from 'react-icons/bi'

import Header from './Header'
import SectionItineraries from './SectionItineraries'
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
        .catch(error => console.log({success: false, error: error}))
    },[city])

  
    return(
        <>
        <Header/>
        <SectionItineraries cityItinerary={cityItinerary}/>
        <div className="container text-center my-5 d-flex justify-content-center">
            <Link to="/" className="text-decoration-none">
                <Button variant="secondary" className="btn-my" >
                Back to Home <BiHome/>
                </Button>
            </Link>
            <Link to="/cities" className="text-decoration-none">
                <Button variant="secondary" className="btn-my" >
                Back to Cities <BiWorld/>
                </Button>
            </Link>
        </div>
        <Footer/>

       </> 
    ) 
    
}
export default ItineraryPage