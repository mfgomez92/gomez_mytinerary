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
    titleSV: ""}]
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
                city:  state.cities.filter(({_id})=>{
                    return _id.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0}),
                
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

