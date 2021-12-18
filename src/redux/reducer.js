const initialService = {
    typeOfService: "",
    price: "", 
    duration: "",
    benefits:"",
    imageURL: ""  
}

const initialEmployee = {
    id: "",
    name: "",
    title: "", 
    bio: "", 
    education: "", 
    imageURL: "", 
    comments: [] 
}


const initialUser = {
  username: ""
}



const initialState = {
    services: [],
    employees: [],
    selectedService: initialService,
    selectedEmployee: initialEmployee,
    user: initialUser
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "GET_SERVICES": 
          return {...state, services: action.payload} 
        case "GET_SERVICE":
          return {...state, selectedService: action.payload}
        case "CLEAR_SERVICE": 
          return {...state, selectedService: initialService}
        case "GET_EMPLOYEES":
          return {...state, employees: action.payload}
        case "GET_EMPLOYEE": 
          return {...state, selectedEmployee: action.payload}
        case "CLEAR_EMPLOYEE":
          return {...state, selectedEmployee: initialEmployee}
        case "SET_USER": 
          return {...state, user: action.payload};
        case "LOGOUT": 
          return {...state, user: initialUser}
        default: 
            return {...state}
    }
}