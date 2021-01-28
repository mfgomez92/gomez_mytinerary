import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
import {BiHome} from 'react-icons/bi'

import Header from './Header'
import SectionCities from './SectionCities'
import Footer from './Footer'
import Cities from './Cities'

const CitiesPage = () =>{
    return(
        <>
            <Header/>
            <SectionCities/>
            <Cities/>
            <div className="container text-center mt-5">
                <Link to="/" className="text-decoration-none">
                    <Button variant="secondary" className="btn-my m-auto" >
                        Back to Home <BiHome/>
                    </Button>
                </Link>
            </div>
            <Footer/>
        </>
    )
}

export default CitiesPage