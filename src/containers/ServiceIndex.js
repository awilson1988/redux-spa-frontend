import { useEffect, useState } from "react"
import {getServices} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { ServiceCard } from "../components"

function ServiceIndex({getServices, services}){
    const [isSorted, setIsSorted] = useState(false);
    
    useEffect(getServices, [getServices])

    const renderServices = () => {
        return isSorted ? services.concat([]).sort((a, b) => parseInt(a.duration) - parseInt(b.duration))  : services
      }
    
    return (
        <div>
          <button onClick={() => setIsSorted(true)}>Sort</button>
          {renderServices().map(service => <ServiceCard {...service} key={service.id}/>)}
        </div>
      )
}

const mapStateToProps = (state) => {
    return {services: state.services}
}

export default connect(mapStateToProps, { getServices })(ServiceIndex)