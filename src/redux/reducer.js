const initialService = {
    typeOfService: "",
    price: "", 
    duration: "",
    imageURL: ""  
}

const initialState = {
    services: [],
    selectedService: initialService 
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "GET_SERVICES": 
          return {...state, services: action.payload} 
        case "GET_SERVICE":
          return {...state, selectedService: action.payload}
        case "CLEAR_SERVICE": 
          return {...state, selectedService: initialService}
        default: 
            return {...state}
    }
}