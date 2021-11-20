export const getServices = () => {
    return dispatch => fetch("http://localhost:3000/services")
    .then(res => res.json())
    .then(services => dispatch({type: "GET_SERVICES", payload: services})
    )
}