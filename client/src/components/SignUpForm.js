import { useState, useEffect } from "react";
import { useOutletContext, useNavigate, useParams } from "react-router-dom";


    function SignUpForm() {
        const {postSignUps} = useOutletContext()
        
        const navigate = useNavigate()


      const [signUps, setSignUps] = useState(null)
      const [formData, setFormData] = useState({
        first_name: "",
        last_name: ""
      })

      const {id} = useParams()
  
      useEffect(() => {
          fetch (`/signups/${id}`)
          .then (response => response.json())
          .then (signUpsData => setSignUps(signUpsData))
      },[])
  
  
      if (signUps === null){
          return null
      }

    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
      }
    
    function handleSubmit(event){
        event.preventDefault()
    
        postSignUps(formData)

        setFormData({
            first_name: "",
            last_name: ""
        })
  
        navigate('/')
    }
        
    return (
        <div className="text-green-500 mx-1 text-2xl stroke-current relative inline-block font-extrabold grid place-items-center">
        <h2 className="">Sign up for this event</h2>
        <br/>
        <h1>{}</h1>
        <form onSubmit={handleSubmit}>
          <h4>First name:</h4>
          <input onChange={updateFormData}type="text" first_name="first name"/>
          <h4>Last name:</h4>
          <input onChange={updateFormData}type="text" last_name="last name" />
          <button className='border border-green-500'type="submit">Sign Up</button>
        </form>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>
    );
  }
  
  export default SignUpForm;