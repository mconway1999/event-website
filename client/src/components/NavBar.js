import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <br/>
        <NavLink to="/signup">Sign Up For An Event</NavLink>
        <br/>
        <NavLink to="/savedevents">View Your Saved Events</NavLink>
        <br/>
        <NavLink to="/signedup">Events You Have Signed Up For</NavLink>
        <br/>
        <NavLink to="/about">About</NavLink>
    </nav>
    )}
  
  export default NavBar;