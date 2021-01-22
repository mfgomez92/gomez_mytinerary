import { useEffect, useState } from "react"

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

  
    return <img src={cityItinerary.imgCity}/>
    
}
export default ItineraryPage