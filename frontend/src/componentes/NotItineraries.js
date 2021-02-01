const NotItineraries=()=>{ 
    const notItinerary="/assets/not-itinerary.jpg"
    return (
            <>
                <div className="container-fluid d-flex flex-wrap">               
                    <div className="row justify-content-center pt-3 mx-auto">
                        <div key={notItinerary} className="col-5  foto_not_found m-3" style={{backgroundImage: `url(${notItinerary})`}}>
                            <p>New itineraries Coming Soon</p>
                        </div>
                    </div>
                </div>
            </>
    )}


export default NotItineraries