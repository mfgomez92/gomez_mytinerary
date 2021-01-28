const initialState  = {
    cities: [],
    citiesFiltradas:[],
    notResults:[""]
} 

export function citiesReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_CITIES':
            return {
                ...state,
                cities: action.payload,
                citiesFiltradas: action.payload
            }
            break
        case 'FILTRAR_CITIES':
            return {
                ...state,
                citiesFiltradas: state.cities.filter(({cityName})=>{
                    return cityName.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0}),
                notResults: action.payload
            }  
            break
        default:
            return state
    }
}

