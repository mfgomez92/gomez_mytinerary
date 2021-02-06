import axios from "axios"

const authActions = {
    newUser: (nuevoUsuario) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/user/signup', nuevoUsuario)
           if (!respuesta.data.success) {
               return respuesta.data
           }
            dispatch({type: 'LOG_USER', payload: respuesta.data})
        }
    },
    loginUser: (user) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/user/signin', user)
            if (!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({type:'LOG_USER', payload: respuesta.data})
        }
    },
    logoutUser: () => {
        return (dispatch, getState) => {
            dispatch({type: 'LOG_OUT_USER'})
        }
    },
    //logueo desde local storage
    logFromLS: (token) => {
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.post('http://localhost:4000/user/ls', {token}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                dispatch({type: 'LOG_USER', payload: {response: {...respuesta.data.response}}})
            } catch(err) {
                if (err.response.status === 401) {
                    alert("Access denied")
                    localStorage.clear()
                    return '/'
                }
            }
        }
    },
    getCountries:() => {
        return async (dispatch, getState) => {
            const respuesta = await axios.get('https://restcountries.eu/rest/v2/all')
            dispatch({type:'GET_COUNTRIES', payload: respuesta})
        }
    },

}

export default authActions