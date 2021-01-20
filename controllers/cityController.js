const ciudades = [
            
    {   direccion:"./assets/beirut-libano.jpg",
        ciudad:"Beirut",
        pais:"Líbano"
    },
    {   direccion:"./assets/dakar-senegal.jpg",
        ciudad:"Dakar",
        pais:"Senegal"
    },
    {
        direccion:"./assets/galway-irlanda.jpg",
        ciudad:"Galway",
        pais:"Irlanda"
    },
    {
        direccion:"./assets/isla_canguro-australia.jpg",
        ciudad:"Isla Canguro",
        pais:"Australia"
    },

{
direccion:"./assets/islas_egadas-italia.jpg",
ciudad:"Islas Egadas",
pais:"Italia"
},
{
direccion:"./assets/paris-francia.jpg",
ciudad:"Paris",
pais:"Francia"
},
{
direccion:"./assets/plymouth-reinounido.jpg",
ciudad:"Plymouth",
pais:"Reino Unido"
},
{
direccion:"./assets/qingdao-china.jpg",
ciudad:"Qingdao",
pais:"China"
},
{
direccion:"./assets/rabat-marruecos.jpg",
ciudad:"Rabat",
pais:"Marruecos"
},
{
direccion:"./assets/rijeka-croacia.jpg",
ciudad:"Rijeka",
pais:"Croacia"
},
{
direccion:"./assets/salvador-brasil.jpg",
ciudad:"Salvador",
pais:"Brasil"
},
{
direccion:"./assets/siargao-filipinas.jpg",
ciudad:"Siargao",
pais:"Filipinas"
}

]



const cityController ={

    allCities:(req, res)=>{
        //devuelve todas las ciudades
        res.json({
            response:ciudades
        })
    },

    singleCity:(req, res)=>{
        //Devuelve una sola ciudad
        const cityName = req.params.cityName
        ciudades.map(city=>{
            if (city.ciudad ===cityName){
                res.json({
                    response:city
                })
            }
        })


    }
}
module.exports= cityController








