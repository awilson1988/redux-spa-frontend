import { useEffect } from "react"
import {getServices} from '../redux/actionCreators'
import { connect } from 'react-redux'

function ServiceIndex({getServices, services}){
    useEffect(() => services.length === 0 && getServices(), [services])
   


    return<h1>Services Go here!</h1>
}

const mapStateToProps = (state) => {
    return {services: state.services}
}

export default connect(mapStateToProps, { getServices })(ServiceIndex)