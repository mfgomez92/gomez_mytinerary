const SectionCities =(props)=> { 
    const filtrado = e =>{
        var valor= e.target.value
        var ciudadesFiltradas= props.cities.filter(({cityName})=>{
            return cityName.toUpperCase().indexOf(valor.toUpperCase().trim()) === 0})
            props.setCitiesFiltradas(ciudadesFiltradas)
            ciudadesFiltradas.length===0&& props.setNotResults(valor)
    }  


    return  (
        <>
            <section className="sectionC">
                <div className="sectionCities">
                    <p>Cities</p>
                    <input type="text" placeholder="Enjoy the experiences, find excursions and tours" onChange={filtrado} autoFocus="autofocus"></input>
                </div>
            </section>
        </>

    )
               
         
            
}

export default SectionCities