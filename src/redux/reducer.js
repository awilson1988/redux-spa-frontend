const initialState = {
    services: [],
    selectedService: {
        typeOfService: "",
        price: "", 
        duration: "",
        imageURL: ""

    }
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "GET_SERVICES": 
            return {...state, services: action.payload} 
        case "GET_SERVICE":
            console.log("Lookie lookie itsa cookie", action.payload)
            return {...state, selectedService: action.payload}

        default: 
            return {...state}
    }
}