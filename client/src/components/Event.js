import { Link, useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";


function Event({event}) {

    const [savedEvents, setSavedEvents] = useState([])


    const navigate = useNavigate()
    const {patchSignUps, signUps} = useOutletContext()


    function updateHandleSubmit(e){
        e.preventDefault()
        patchSignUps (signUps.id, {optionMenu:(e.target.value)})
    }



    return (
        <li className="py-2 px-6 border-b-4 border-green-500 grid place-items-center" >
        <img src={event.image} alt={event.title}/>
        <br/>
        <h3 className="md:underline">{event.title}</h3>
        <br/>
        <h4>Interested in signing up for this event?</h4>
        <select className='bg-gray-900 bg-gray-900 px-6 border border-green-500' onChange={updateHandleSubmit} value={event.id} name="optionMenu">
            <option value = "Yes">Yes </option>
            <option value = "No">No </option>
            <option value = "Maybe">Maybe </option>
            </select>
        <br/>
        <button className='bg-gray-900 bg-gray-900 px-6 border border-green-500' >Save This Event</button>
        <br/>
        <Link to={`/eventdetails/${event.id}`} className="py-2 px-6 border-b-4 border-green-500 hover:text-white hover:bg-green-500">View Event Details</Link>
        <br/>
        <Link to={`/signup/${event.id}`} className="py-2 px-6 border-b-4 border-green-500 hover:text-white hover:bg-green-500">Sign Up For This Event</Link>
        <br/> 
        <br/>
    </li>
    );
  }
  
  export default Event;