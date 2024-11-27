import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";


    function SignUpForm() {
        const {postSignUps, patchSignUps} = useOutletContext()
        const navigate = useNavigate()
    
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: ""
      })


    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
      }
    
    function handleSubmit(event){
        event.preventDefault()
    }
    

    postSignUps(formData)
    patchSignUps(formData)

    setFormData({
        name: "",
        image: ""
      })
  
    navigate('/')
    
  
    return (
        <div className="sign-up-form">
        <h2>Sign Up for this Event</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={updateFormData}type="text" first_name="first name"/>
          <input onChange={updateFormData}type="text" last_name="last name" />
          <button type="submit">Sign Up</button>
        </form>
        
      </div>
    );
  }
  
  export default SignUpForm;