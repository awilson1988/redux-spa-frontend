import { useEffect } from "react"
import {getServices} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { ServiceCard } from "../components"

function ServiceIndex({getServices, services}){
    useEffect(getServices, [getServices])

    const sortedServices = () => {
        services.sort((a, b) => (a.duration > b.duration) ? 1 : -1)
    }

    return <div className="cards">
        <button onClick={sortedServices}>Sort</button>
        {services.map(service => <ServiceCard {...service} key={service.id}/>)}
    </div>
}

const mapStateToProps = (state) => {
    return {services: state.services}
}

export default connect(mapStateToProps, { getServices })(ServiceIndex)