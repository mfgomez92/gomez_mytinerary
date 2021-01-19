import { useEffect, useState } from "react"
import Cities from './Cities'

const CitiesPage = () =>{
    
    var [cities, setCities] = useState([])
    var [citiesFiltradas, setCitiesFiltradas] = useState([])
    
    useEffect(()=>{
        //Aqui va el fetch
        const ciudades = [
            
            {   direccion:"./assets/beirut-libano.jpg",
                ciudad:"Beirut",
                pais:"Líbano"
            },
            {   direccion:"./assets/dakar-senegal.jpg",
                ciudad:"Dakar",
                pais:"Senegal"
            },
            {
                direccion:"./assets/galway-irlanda.jpg",
                ciudad:"Galway",
                pais:"Irlanda"
            },
            {
                direccion:"./assets/isla_canguro-australia.jpg",
                ciudad:"Isla Canguro",
                pais:"Australia"
            },

    {
        direccion:"./assets/islas_egadas-italia.jpg",
        ciudad:"Islas Egadas",
        pais:"Italia"
    },
    {
        direccion:"./assets/paris-francia.jpg",
        ciudad:"Paris",
        pais:"Francia"
    },
    {
        direccion:"./assets/plymouth-reinounido.jpg",
        ciudad:"Plymouth",
        pais:"Reino Unido"
    },
    {
        direccion:"./assets/qingdao-china.jpg",
        ciudad:"Qingdao",
        pais:"China"
    },
    {
        direccion:"./assets/rabat-marruecos.jpg",
        ciudad:"Rabat",
        pais:"Marruecos"
    },
    {
        direccion:"./assets/rijeka-croacia.jpg",
        ciudad:"Rijeka",
        pais:"Croacia"
    },
    {
        direccion:"./assets/salvador-brasil.jpg",
        ciudad:"Salvador",
        pais:"Brasil"
    },
    {
        direccion:"./assets/siargao-filipinas.jpg",
        ciudad:"Siargao",
        pais:"Filipinas"
    }
    
]
        setCities(ciudades)
        setCitiesFiltradas(ciudades)
    },[])
    
    const filtrado = e =>{
        var valor= e.target.value
        
        var ciudadesFiltradas= cities.filter(({ciudad})=>{
            
            return ciudad.toUpperCase().indexOf(valor.toUpperCase()) === 0} )
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