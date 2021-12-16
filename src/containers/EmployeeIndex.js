import { useEffect } from "react"
import {getEmployees} from '../redux/actionCreators'
import { connect } from 'react-redux'
import { EmployeeCard } from "../components"

function EmployeeIndex({getEmployees, employees}){
    useEffect(getEmployees, [getEmployees])
   


    return <div className="cards">
        {employees.map(employee => <EmployeeCard {...employee} key={employee.id}/>)}
    </div>
}

const mapStateToProps = (state) => {
    return {employees: state.employees}
}

export default connect(mapStateToProps, { getEmployees })(EmployeeIndex)