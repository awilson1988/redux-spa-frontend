export default function ServiceCard({type_of_service, price, duration}){

    return <div className="card">
        <h3>{type_of_service}</h3>
        <p>{price}</p> 
        <p>{duration}</p>
    </div>
}