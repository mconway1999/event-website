import EventDetails from "./EventDetails";
import Events from "./Event";
import { useOutletContext } from "react-router-dom";

function EventList() {

    const {events} = useOutletContext()

    const eventComponents = events.map(event => {
        return <Events key={event.id} event={event}/>
                
             
    })

    return (
        <ul className="event-list">{eventComponents}</ul>
    );
  }
  
  export default EventList;