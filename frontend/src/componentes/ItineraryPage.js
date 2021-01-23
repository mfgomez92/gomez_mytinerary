import { useEffect, useState } from "react"
//import {Link} from "react-router-dom"
//import {Button} from 'react-bootstrap'
import Header from './Header'
import SectionItinerary from './SectionItinerary'

const ItineraryPage =(props)=>{
    const [cityItinerary, setCityItenerary]= useState([])
    
    useEffect(()=>{
        //capturo :city de la url del navegador
        const city= props.match.params.city
        //le pego a la api con el metodo get
        fetch('http://localhost:4000/cities/'+city)
        .then(response => response.json())
        .then(data => setCityItenerary(data.response))
    },[])

  
    return(
        <>
        <Header/>
        <SectionItinerary cityItinerary={cityItinerary}/>
        {/* <div className="container text-center mt-5">
            <Link to="/">
                <Button variant="secondary" className="btn-my" >
                    Go Home
                </Button>
            </Link>
        </div> */}
       </> 
    ) 
    
}
export default ItineraryPage