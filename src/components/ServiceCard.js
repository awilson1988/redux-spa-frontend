import { Link } from 'react-router-dom'

export default function ServiceCard({id, typeOfService, price, duration, imageUrl}){
  return <div className="card">
        <Link to={`/services/${id}`}><img src={imageUrl} alt={typeOfService}/></Link>
        <Link to={`/services/${id}`}><h3>{typeOfService}</h3></Link>
        <p>{duration}</p>
        
    </div>
}