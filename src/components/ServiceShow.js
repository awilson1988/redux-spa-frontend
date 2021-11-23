import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getService, clearService } from '../redux/actionCreators'
import { useEffect } from 'react'


function ServiceShow({getService, typeOfService, price, duration, imageUrl, clearService}){
  const routeId = useParams().id
  
  

useEffect(() => {
    getService(routeId)
    return clearService
  }, [getService, routeId, clearService])


    return <div className="show">
      <h1>{typeOfService}</h1>
      <p>{price}</p>
      <p>{duration}</p>
    </div>

}

const mapStateToProps = (state) => {
  return {...state.selectedService}
}

export default connect(mapStateToProps, {getService, clearService})(ServiceShow);