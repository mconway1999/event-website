import { useOutletContext } from "react-router-dom";

function SavedEventList() {
    const {postSavedEvents, deleteSavedEvents} = useOutletContext()
    return (
    <div>
        <li></li>
    </div>);
  }
  
  export default SavedEventList;