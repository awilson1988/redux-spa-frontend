import { useEffect } from "react"
import {getServices} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { ServiceCard } from "../components"

function ServiceIndex({getServices, services}){
    useEffect(getServices, [getServices])
   
function Sort () {
 
}

    return <div className="cards">
        <button>Sort</button>
        {services.map(service => <ServiceCard {...service} key={service.id}/>)}
    </div>
}

const mapStateToProps = (state) => {
    return {services: state.services}
}

export default connect(mapStateToProps, { getServices })(ServiceIndex)