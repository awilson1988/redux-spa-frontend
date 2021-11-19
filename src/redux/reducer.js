const initialState = {
    services: []
}

export default function reducer(state=initialState, action){
    switch (action.type){
        case "GET_SERVICES": 
            return {...state, services: action.payload} 
        default: 
            return {...state}
    }
}