const citiesActions = {
    getCities: () => {
        return async (dispatch, getState) => {
            const respuesta  = await fetch('http://localhost:4000/cities')
            const data = await respuesta.json()
    
            dispatch({type: 'LOAD_CITIES', payload: data.response})
        }
    },
    filtrarCities: (valorAFiltrar) => {
        return async (dispatch, getState) => {
            dispatch({type: 'FILTRAR_CITIES', payload: valorAFiltrar})
        }
    }
}

export default citiesActions