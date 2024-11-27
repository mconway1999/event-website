import { useOutletContext, useNavigate } from "react-router-dom";

function SignedUpList() {

  const {deleteSignUps, signUps} = useOutletContext()

  function handleDeleteButtonClick(){
    deleteSignUps(signUps.id)
}

    return (
      <div>
      <h1>{signUps.event_id}{signUps.attending_event}</h1>
      <button onClick={handleDeleteButtonClick}>Remove Your Sign Up</button>
      </div>
    );
  }
  
  export default SignedUpList;