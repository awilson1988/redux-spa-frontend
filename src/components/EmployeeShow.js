import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getEmployee, clearEmployee } from '../redux/actionCreators'
import { useEffect } from 'react'
import { Comments } from './'

function EmployeeShow({getEmployee, name, title, bio, education, imageUrl, clearEmployee}) {
    const routeId = useParams().id
  
  
    useEffect(() => {
        getEmployee(routeId)
        return clearEmployee
      }, [getEmployee, routeId, clearEmployee])
    
    
        return <div className="show">
          <img src={imageUrl} alt={name}/>
          <h1>{name}</h1>
          <p>{title}</p>
          <p>{bio}</p>
          <p>{education}</p>
          <Comments/>
        </div>
    
    }
    
    const mapStateToProps = (state) => {
      return {...state.selectedEmployee}
    }
    
    export default connect(mapStateToProps, {getEmployee, clearEmployee})(EmployeeShow);