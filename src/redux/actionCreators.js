export const getServices = () => {
    return dispatch => fetch("http://localhost:3000/services")
    .then(res => res.json())
    .then(services => dispatch({type: "GET_SERVICES", payload: services})
    )
} 

export const getService = (id) => {
    return dispatch => fetch(`http://localhost:3000/services/${id}`)
    .then(res => res.json())
    .then(service => dispatch({type: "GET_SERVICE", payload: service})
    )
}

export const clearService = () => ({type: "CLEAR_SERVICE"})

export const submitSignup = (user) => {
    return dispatch => fetch("http://localhost:3000/users",  {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then(res => res.json())
      .then(user => dispatch({type: "SET_USER", payload: user}))
}

export const submitLogin = (user) => {
  return dispatch => fetch("http://localhost:3000/sessions",  {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(user => dispatch({type: "SET_USER", payload: user}))
}


