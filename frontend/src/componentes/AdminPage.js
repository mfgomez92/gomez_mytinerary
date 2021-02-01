import {Accordion, Card, Button, Modal, Table} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import citiesActions from "../redux/actions/citiesActions";
import {BiEdit, BiTrash} from 'react-icons/bi'

const AdminPage =(props)=>{
    useEffect(() => {
        props.getCities()
    }, [])

    const [nuevaCiudad, setNuevaCiudad] = useState({
        cityCode:"",
        cityName:"",
        countryName:"",
        imgCity:"",
        titleSV:"",
        streetView:"",
        flag:""
    })
    const readInput = (e) => {
        console.log(e.target)
        const property = e.target.name
        const value = e.target.value
        setNuevaCiudad({
            ...nuevaCiudad,
            [property]: value
        })
    }
    const enviarInfo = e => {
        e.preventDefault()
        props.newCity(nuevaCiudad)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
        <>
        <div className="container-fluid p-5">
            <div className="container">
                <h1 className="text-center">Mytinerary Administration</h1>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <Card.Header>
                                <p className="m-0 h2">Cities</p>    
                            </Card.Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                            <input type="text" autocomplete="off" className="admin_input "
                            name="cityCode" onChange={(e)=>readInput(e)} placeholder="Enter the city code" required/>

                            <input type="text" autocomplete="nope" className="admin_input"
                            name="cityName" onChange={(e)=>readInput(e)} placeholder="Enter city name" required/>

                            <input type="text" autocomplete="nope" className="admin_input"
                            name="countryName" onChange={(e)=>readInput(e)} placeholder="Enter the name of the Country" required/>

                            <input type="text" autocomplete="nope" className="admin_input"
                            name="imgCity" onChange={(e)=>readInput(e)} placeholder="Enter the url of the Image" required/>

                            <input type="text" autocomplete="nope"className="admin_input"
                            name="flag" onChange={(e)=>readInput(e)} placeholder="Enter the url of the flag" required/>

                            <input type="text" autocomplete="nope" className="admin_input"
                            name="titleSV" onChange={(e)=>readInput(e)} placeholder="Enter Street View title" required/>

                            <input type="text" autocomplete="nope" className="admin_input"
                            name="streetView" onChange={(e)=>readInput(e)} placeholder="Enter the Street View Url" required/>
                            <div className="m-3 container d-flex justify-content-around">
                                <Button variant="primary" className="btn-mx" onClick={enviarInfo}>Validate</Button>
                                <Button variant="primary" className="btn-mx" onClick={handleShow}>View All Cities</Button>
                            </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <Card.Header>
                            <p className="m-0 h2">Activities</p>   
                            </Card.Header> 
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                            <select name="autorId" id=""  className="admin_input ">
                                <option value="" selected>Select a City</option>
                                {props.cities && props.cities.map(city => {
                                    return <option value={city._id}>{city.cityName}</option>
                                })}
                            </select>
                            <input type="text" autocomplete="nope" className="admin_input "
                            name="activityAuthorName" placeholder="Author" required/>

                            <input type="text" autocomplete="nope" className="admin_input"
                            name="activityAuthorPic" placeholder="Pic Author" required/>

                            <input type="text" autocomplete="nope" className="admin_input"
                            name="activityContact" placeholder="Enter your Contact Page" required/>

                            <input type="text" autocomplete="nope" className="admin_input"
                            name="activityName" placeholder="Enter the name of the Activity" required/>

                            <input type="text" autocomplete="nope"className="admin_input"
                            name="activityPic" placeholder="Enter the url of the activity image" required/>

                            <input type="text" autocomplete="nope" className="admin_input"
                            name="activityDescription" placeholder="Enter the description of the activity" required/>

                            <input type="number" autocomplete="nope" className="admin_input"
                            name="activityDuration" placeholder="Enter the duration of the activity" required/>

                            <input type="number" autocomplete="nope" className="admin_input"
                            name="activityPrice" placeholder="Enter the price of the activity" required/>

                            <div className="m-3 container d-flex justify-content-around">
                                <Button variant="primary" className="btn-mx">Validate</Button>
                                <Button variant="primary" className="btn-mx">View All Activities</Button>
                            </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        <Card.Header>
                        <p className="m-0 h2">Itineraries</p>    
                        </Card.Header>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
        {/* modal para ver todas las ciudades */}
        <Modal  show={show} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
            <Modal.Title>
                <p className="m-0 h1">Cities</p> 
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* {Aqui se renderizan todas las ciudades} */}
                <Table striped  hover >
                    <thead>
                        <tr>
                            <th className="h2">City Code</th>
                            <th className="h2">City</th>
                            <th className="h2">Country</th>
                            <th className="h2">Image</th>
                            <th className="h2">Flag</th>
                            <th className="h2">Edit</th>
                            <th className="h2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.cities.map(({cityCode,cityName,countryName,imgCity,flag,streetView,titleSV })=>{
                            return (
                                <>
                                    <tr>
                                        <td className="h4">{cityCode}</td>
                                        <td className="h4">{cityName} </td>
                                        <td className="h4">{countryName}</td>
                                        <td className="h4">{imgCity}</td>
                                        <td className="h4">{flag}</td>
                                        <td className="text-center h3"><BiEdit/></td>
                                        <td className="text-center h3"><BiTrash/></td>
                                    </tr>
                                </>
                            )

                        }) }
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        {/* modal para ver todas las actividades */}
       </> 
    ) 
    
}

const mapStateToProps = state => {
    return {
        cities: state.citiesReducer.cities
    }
}
const mapDispatchToProps = {
    getCities: citiesActions.getCities,
    newCity: citiesActions.newCity
}
export default connect(mapStateToProps,mapDispatchToProps)(AdminPage) 

