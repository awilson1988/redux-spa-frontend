export default function ServiceCard({typeOfService, price, duration}){

    return <div className="card">
        <h3>{typeOfService}</h3>
        <p>{price}</p> 
        <p>{duration}</p>
    </div>
}