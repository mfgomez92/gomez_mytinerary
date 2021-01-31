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
            dispatch({type: 'LOAD_CITY', payload: id})
        }
    },
    newCity: newCity => {
        return async (dispatch, getState) => {
        if (newCity.cityCode === '' || newCity.cityName === '' || newCity.countryName === ''
        || newCity.imgCity === ''|| newCity.titleSV === ''|| newCity.streetView === ''|| newCity.flag === '') {
            alert("Fill in all fields")
            
        }else{
            const respuesta = await axios.post('http://localhost:4000/cities', newCity)
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