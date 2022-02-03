import { Link } from 'react-router-dom'
import { useState } from "react"

export default function ServiceCard({id, typeOfService, price, duration, imageUrl}){
  
  const [likes, setLikes] = useState(0);

  let incrementLikes = () => {
    setLikes(likes + 1);
  };

  
  return <div className="card">
        <Link to={`/services/${id}`}><img src={imageUrl} alt={typeOfService}/></Link>
        <Link to={`/services/${id}`}><h3>{typeOfService}</h3></Link>
        <p>{duration}</p>
        <button onClick={incrementLikes}>Like</button> 
        <h3>Like Counter:</h3>
        <h2>{likes}</h2>
        
        
      
        
    </div>
}