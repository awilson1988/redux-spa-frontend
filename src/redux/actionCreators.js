export const getServices = () => {
    return dispatch => fetch("http://localhost:3000/services")
    .then(res => res.json())
    .then(services => dispatch({type: "GET_SERVICES", payload: services})
    )
} 

export const getService = (id) => {
    return dispatch => fetch('http://localhost:3000/services/${id}')
    .then(res => res.json())
    .then(service => dispatch({type: "GET_SERVICE", payload: service})
    )
}


