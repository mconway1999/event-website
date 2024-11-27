import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Event({event}) {
        console.log(event)
    const {patchSignUps, signUps, postSavedEvents} = useOutletContext()

    function updateHandleSubmit(e){
        e.preventDefault()
        patchSignUps (signUps.id, {optionMenu:(e.target.value)})
    }

    function handleSubmit(e){
        e.preventDefault()
        postSavedEvents(event.id, {optionMenu:(e.target.value)})
    }

    return (
        <li className="events">
        <img src={event.image} alt={event.title}/>
        <h3>{event.title}</h3>
        <h4>Interested in attending this event?</h4>
        <select onChange={updateHandleSubmit} value={event.id} name="optionMenu">
            <option value = "Yes">Yes </option>
            <option value = "No">No </option>
            <option value = "Maybe">Maybe </option>
            </select>
            <button onChange={handleSubmit}>Add to Favorites</button>
        <Link to={`/eventdetails/${event.id}`}>View Event Details</Link>
    </li>
    );
  }
  
  export default Event;