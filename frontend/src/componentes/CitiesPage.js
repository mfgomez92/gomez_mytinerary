import { useEffect, useState } from "react"
import Cities from './Cities'

const CitiesPage = () =>{
    
    var [cities, setCities] = useState([])
    var [citiesFiltradas, setCitiesFiltradas] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:4000/cities')
        .then(response => response.json())
        .then(data => [setCities(data.response),setCitiesFiltradas(data.response)])
    },[])
    
    const filtrado = e =>{
        var valor= e.target.value
        var ciudadesFiltradas= cities.filter(({ciudad})=>{
            return ciudad.toUpperCase().indexOf(valor.toUpperCase().trim()) === 0})
            setCitiesFiltradas(ciudadesFiltradas)
    }  

    return(
        <>
            <h1>Cities</h1>
            <input type="text" placeholder="Type here" onChange={filtrado}></input>
            <Cities cities={citiesFiltradas}/>

        </>
    )
}

export default CitiesPage