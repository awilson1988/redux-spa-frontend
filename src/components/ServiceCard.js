import { Link } from 'react-router-dom'

export default function ServiceCard({id, typeOfService, price, duration}){
  return <div className="card">
        <Link to={`/services/${id}`}><h3>{typeOfService}</h3></Link>
        <p>{price}</p> 
        <p>{duration}</p>
    </div>
}