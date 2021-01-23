import { useEffect, useState } from "react"
import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
import Header from './Header'
import SectionCities from './SectionCities'

import Cities from './Cities'

const CitiesPage = () =>{
    
    var [cities, setCities] = useState([])
    var [citiesFiltradas, setCitiesFiltradas] = useState([""])
    var [notResults, setNotResults]= useState("")
    
    useEffect(()=>{
        fetch('http://localhost:4000/cities')
        .then(response => response.json())
        .then(data => [setCities(data.response),setCitiesFiltradas(data.response)])
    },[])

    return(
        <>
            <Header/>
            <SectionCities setCitiesFiltradas={setCitiesFiltradas} cities={cities} notResults={notResults}
            setNotResults={setNotResults}/>
            <Cities cities={citiesFiltradas} notResults={notResults}/>
            <div className="container text-center mt-5">
                <Link to="/">
                    <Button variant="secondary" className="btn-my" >
                        Go Home
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default CitiesPage