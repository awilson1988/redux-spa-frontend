import { useEffect } from "react"
import {getServices} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { ServiceCard, SortedServiceCards } from "../components"

function ServiceIndex({getServices, services}){
    useEffect(getServices, [getServices])
    return <div> 
        <button className="sort" onClick={SortedServiceCards}>Sort</button>
        
        {services.map(service => <ServiceCard {...service} key={service.id}/>)} 
    </div>
}

const mapStateToProps = (state) => {
    return {services: state.services}
}

export default connect(mapStateToProps, { getServices })(ServiceIndex)