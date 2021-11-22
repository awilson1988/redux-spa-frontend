import { useParams } from 'react-router-dom'

function ServiceShow(props){
const routeId = useParams().id

    return <h1>You're in the show page now</h1>

}

export default ServiceShow;