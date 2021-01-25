const SectionItineraries =({cityItinerary})=> { 
    const { cityName,countryName,flag,imgCity,streetView,titleSV}= cityItinerary
    const algo="/assets/not-itinerary.jpg"

    return  (
        <>
            <section className="sectionI">
                <div className="container-fluid m-0 p-0">
                    <div className="row m-0 p-0">
                        <div className="texto_itenerary" >
                                <p>Discover the city of {cityName}, {countryName} </p>
                                <img src={flag} className="flag" alt={countryName}/>
                        </div>
                        <div className="col-7 foto_itenerary" style={{backgroundImage: `url(${imgCity})`}}>
                        </div>
                        <div className="col-5  p-0">
                            <iframe src={streetView} className="street-view" 
                            title={titleSV} allowfullscreen="" aria-hidden="false" ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid d-flex flex-wrap">               
                    <div className="row justify-content-center pt-3 mx-auto">
                        <div key={algo} className="col-5  foto_not_found m-3" style={{backgroundImage: `url(${algo})`}}>
                            <p>New itineraries Coming Soon</p>
                        </div>
                    </div>
            </div>
        </>
    )      
}

export default SectionItineraries