import { useEffect } from "react"
import {getServices} from '../redux/actionCreators'
import { connect } from 'react-redux'
import ServiceCard from "../components/ServiceCard"

function ServiceIndex({getServices, services}){
    useEffect(getServices, [getServices])
   


    return <div className="cards">
        {services.map(service => <ServiceCard {...service} key={service.id}/>)}
    </div>
}

const mapStateToProps = (state) => {
    return {services: state.services}
}

export default connect(mapStateToProps, { getServices })(ServiceIndex)