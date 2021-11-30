const initialService = {
    typeOfService: "",
    price: "", 
    duration: "",
    imageURL: ""  
}



const initialState = {
    services: [],
    selectedService: initialService,
    user: {
      username: "" 
    }
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "GET_SERVICES": 
          return {...state, services: action.payload} 
        case "GET_SERVICE":
          return {...state, selectedService: action.payload}
        case "CLEAR_SERVICE": 
          return {...state, selectedService: initialService}
          case "SET_USER": 
          return {...state, user: action.payload};
        default: 
            return {...state}
    }
}