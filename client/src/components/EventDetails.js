
import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";


function EventDetails() {
   
    const [event, setEvent] = useState(null)

    const {id} = useParams()


    useEffect(() => {
        fetch (`/events/${id}`)
        .then (response => response.json())
        .then (eventData => setEvent(eventData))
    },[])


    if (event === null){
        return null
    }
    return(
    <div className="text-green-500 mx-1 stroke-current relative inline-block font-extrabold grid place-items-center">
        <h1 className="md:underline">{event.title}</h1>
        <img src={event.image} alt={event.title}/>
        <h1>{event.description}</h1>
    </div>);
  }
  
  export default EventDetails;