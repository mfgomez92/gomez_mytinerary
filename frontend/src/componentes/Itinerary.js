import { Carousel, Button} from "react-bootstrap";
import Rating from '@material-ui/core/Rating';
import {BiMoney, BiHeart} from 'react-icons/bi'
import React, { useState } from 'react'


const Itinerary= (props) =>{
    const {itineraryActivity, itineraryName, itineraryPrice, itineraryDuration, itineraryDescription,itineraryCategory}= props.itinerary
    const [visible, setVisible] = useState(true);
    return (
        <>
           <div className="row justify-content-center p-5 mx-auto ">
                <div className="col-4">
                <Carousel fade={true} controls={false} indicators={false}>
                {itineraryActivity.map(({activityName, activityPic, index})=>(
                    <Carousel.Item>
                        <div key={index} className="foto_carrusel m-2" 
                        style={{backgroundImage: `url(${activityPic})`}}>
                            <p>{activityName}</p>
                        </div>
                    </Carousel.Item>    
                        ))}
                </Carousel>
                </div>
        <div className="col-4 p-5 d-flex flex-column border-bottom border-secondary">
            <div className="d-flex justify-content-between border-bottom align-items-center">
                <h1 className="font-weight-bold">{itineraryName}</h1>
                <div>
                    <Rating name="primary" icon={<BiMoney/>} name="read-only" value={itineraryPrice} readOnly size="large" emptyIcon={<BiMoney/>} />
                    <p className="h5">{`Estimated Duration ${itineraryDuration}hs.`}</p>
                </div>
                <Button variant="secondary" className="btn-mz rounded-circle" >
                    <BiHeart/>
                </Button>
            </div>
            <p className="h3 mt-3">{itineraryDescription}</p>
            <div className="d-flex">
                {itineraryCategory.map(category=>{
                    return <p className="h4 bg-secondary m-2 p-1 rounded text-white">#{category}</p>})}
            </div>
            {!visible && (
            <div>
                <h1>Hola</h1>
            </div>
            )
            }
            <Button variant="secondary" className="btn-mz m-auto" onClick={()=> setVisible(!visible)}>
                {!visible? "View Less": "See all Comments"  }
            </Button>

        </div>
        </div>                         
        </>
    )
    }
export default Itinerary
 