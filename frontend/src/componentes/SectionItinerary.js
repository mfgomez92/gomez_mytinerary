const SectionItinerary =({cityItinerary})=> { 
    const { cityName,countryName,flag,imgCity,streetView,titleSV}= cityItinerary
  
    return  (
        <>
            <section className="sectionI">
                <div className="container">
                    <div className="row">
                        <div className="col foto_itenerary" style={{backgroundImage: `url(${imgCity})`}}>
                            <div className="texto_itenerary" >
                                <p>Discover the city of {cityName}, {countryName}</p>
                            </div>
                        </div>
                        <div className="col">
                            <iframe src={streetView} width="600" height="450" frameborder="0" style={{border:"none"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )      
}

export default SectionItinerary