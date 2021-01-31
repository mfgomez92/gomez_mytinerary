import {Link} from "react-router-dom"
import {Button} from 'react-bootstrap'
import {BiHome, BiWorld} from 'react-icons/bi'
import Header from './Header'
import SectionItineraries from './SectionItineraries'
import Footer from './Footer'

const ItineraryPage =(props)=>{
    const id= props.match.params.city

    return(
        <>
        <Header/>
        <SectionItineraries id={id}/>
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


