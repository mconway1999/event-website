import Events from "./Event";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";



function EventList() {

    const [selectedOption, setSelectedOption] = useState('all')
    const {events} = useOutletContext()

    const filteredEvents = events.filter(event => {
        if (selectedOption === 'all'){
            return true 
        }
        else {
            return selectedOption === event.location
        }
    })

    const eventComponents = filteredEvents.map(event => {
        return <Events key={event.id} event={event}/>
                
             
    })
    function handleChange(e){
        setSelectedOption(e.target.value)
    }

    return (
        <div className="text-green-400 mx-1 text-1xl stroke-current relative inline-block font-extrabold  md:items-center space-x-10">
        <h4 className="px-10 ">Events By Borough:</h4>
        <select className=' indent-10 bg-gray-900 px-1 border border-green-500'onChange={handleChange} value={events.location}>
        <option value='all'>All</option>
        <option value = "Manhattan">Manhattan</option>
        <option value = "Brooklyn">Brooklyn</option>
        <option value = "Queens">Queens</option>
        <option value = "Bronx">Bronx</option>
        <option value = "Staten Island">Staten Island</option>
        </select>
        <br/>
        <br/>
        <ul>{eventComponents}</ul>
        </div>
    );
  }
  
  export default EventList;