import axios from 'axios'

const citiesActions = {
    getCities: () => {
        return async (dispatch, getState) => {
            const respuesta  = await fetch('http://localhost:4000/cities')
            const data = await respuesta.json()
            //catchear el error
            dispatch({type: 'LOAD_CITIES', payload: data.response})
        }
    },
    getCity: (id) => {
        return async (dispatch, getState) => {
            const respuesta  = await fetch('http://localhost:4000/cities/'+id)
            const data = await respuesta.json()
            //catchear el error
            dispatch({type: 'LOAD_CITY', payload: data})
        }
    },
    getItineraries:(id)=>{
        return async (dispatch, getState) => {
            const respuesta  = await fetch('http://localhost:4000/itineraries/'+id)
            const data = await respuesta.json()
            //catchear el error
            dispatch({type: 'LOAD_ITINERARIES', payload: data})
        }
    },
    newCity: (newCity, file) => {
        return async (dispatch, getState) => {
        if (newCity.cityCode === '' || newCity.cityName === '' || newCity.countryName === ''
        || newCity.titleSV === ''|| newCity.streetView === ''|| newCity.flag === '') {
            alert("Fill in all fields")
            
        }else{
            const form = new FormData()
            form.append('newCity',newCity)
            form.append('file', file)
            const respuesta = await axios.post('http://localhost:4000/cities', form, {headers:{'Content-Type':'multipart/formdata'}})
            dispatch({type: 'NEW_CITY', payload: respuesta.data.success})
        }}
    },
    filtrarCities: (valorAFiltrar) => {
        return async (dispatch, getState) => {
            dispatch({type: 'FILTRAR_CITIES', payload: valorAFiltrar})
        }
    }
}

export default citiesActions