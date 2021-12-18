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

export const getEmployees = () => {
  return dispatch => fetch("http://localhost:3000/employees")
  .then(res => res.json())
  .then(employees => dispatch({type: "GET_EMPLOYEES", payload: employees})
  )
}  

export const getEmployee = (id) => {
  return dispatch => fetch(`http://localhost:3000/employees/${id}`)
  .then(res => res.json())
  .then(employee => dispatch({type: "GET_EMPLOYEE", payload: employee})
  )
}

export const clearEmployee = () => ({type: "CLEAR_EMPLOYEE"})

export const submitSignup = (user) => {
    return dispatch => fetch("http://localhost:3000/users",  {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then(res => res.json())
      .then(response => { 
        localStorage.token = response.token
        dispatch({type: "SET_USER", payload: response.user})
    }) 
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
    .then(response => { 
      localStorage.token = response.token
      dispatch({type: "SET_USER", payload: response.user})
  }) 
}

export const submitComment = (comment, employeeId) => {
  return dispatch => fetch(`http://localhost:3000/employees/${employeeId}/comments`,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.token 
    },
    body: JSON.stringify(comment)
  })
  .then(res => res.json())
  .then(console.log)
}

export const autoLogin = () => {
  return dispatch => fetch("http://localhost:3000/me", {
    headers: {
    'Authorization': localStorage.token 
    }
  })
  .then(res => res.json())
    .then(response => { 
      localStorage.token = response.token
      dispatch({type: "SET_USER", payload: response.user})
  }) 
}

export const logout = () => {
  return dispatch => {
    localStorage.clear()
    dispatch({type: "LOGOUT"})
  }
}


