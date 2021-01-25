import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom"

const SectionHome =()=> { 
    return  (
        <>
            <section className="section">
                <div className="sectionHome">
                    <p  className="h1">Find your perfect trip, designed by insiders who know and love their cities</p>
                    <Link to="/cities" className="text-decoration-none">
                        <Button variant="secondary" className="btn-my" >
                            Discover
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    )       
}

export default SectionHome