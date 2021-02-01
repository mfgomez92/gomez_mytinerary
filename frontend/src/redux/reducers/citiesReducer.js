const initialState  = {
    cities: [],
    citiesFiltradas:[],
    notResults:[""],
    city:[{
    cityName: "",
    countryName: "",
    flag: "",
    imgCity: "",
    streetView: "",
    titleSV: ""}],
    activities:[],
    itineraries:[]

} 

export function citiesReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_CITIES':
            return {
                ...state,
                cities: action.payload,
                citiesFiltradas: action.payload
            }
        case 'LOAD_CITY':
            return{
                ...state,
                city: action.payload.response,
                activities: action.payload.activities===null? []: action.payload.activities
            }
        case 'LOAD_ITINERARIES':
            return{
                ...state,
                itineraries: action.payload.response
            }
        case 'NEW_CITY':
                action.payload ? alert("Se grabó correctamente") : alert("Hubo un error")
                return state
        case 'FILTRAR_CITIES':
            return {
                ...state,
                citiesFiltradas: state.cities.filter(({cityName})=>{
                    return cityName.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0}),
                notResults: action.payload
            }  
        default:
            return state
    }
}

