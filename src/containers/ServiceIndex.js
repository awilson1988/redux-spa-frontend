import { useEffect } from "react"
import {getServices} from '../redux/actionCreators'
import { NavLink }  from 'react-router-dom'
import { connect } from 'react-redux'
import { ServiceCard } from "../components"
import { SortedServiceCards } from "../components"

function ServiceIndex({getServices, services}){
    useEffect(getServices, [getServices])
    return <div> 
        <NavLink to="/services/?sort=duration"><button>Sort</button></NavLink>
        {services.map(service => <ServiceCard {...service} key={service.id}/>)} 
    </div>
}

const mapStateToProps = (state) => {
    return {services: state.services}
}

export default connect(mapStateToProps, { getServices })(ServiceIndex)