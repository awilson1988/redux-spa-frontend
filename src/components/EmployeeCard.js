import { Link } from 'react-router-dom'

export default function EmployeeCard({id, name, title, bio, education, imageUrl}){
  return <div className="card">
        <Link to={`/employees/${id}`}><img src={imageUrl} alt={name}/></Link>
        <Link to={`/employees/${id}`}><h3>{name}</h3></Link>
        <p>{title}</p> 
    </div>
}