import { useEffect, useState } from "react"

const ItineraryPage =(props)=>{
    const [cityItinerary, setCityItenerary]= useState([])
    
    useEffect(()=>{
        
        const city= props.match.params.cityName
        
        fetch('http://localhost:4000/cities/'+city)
        .then(response => response.json())
        .then(data => setCityItenerary(data.response))
        
    },[])
    
  
    return <h1>Soy la pagina de {cityItinerary.ciudad}</h1>
}
export default ItineraryPage