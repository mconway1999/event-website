import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav className=" text-green-500 mx-1 text-1xl stroke-current relative inline-block font-extrabold md:flex md:items-center justify-center space-x-6">
        <NavLink className='py-2 px-6 border-b-4 border-green-500 hover:text-white hover:bg-green-500' to="/">Home</NavLink>
        <NavLink className='py-2 px-6 border-b-4 border-green-500 hover:text-white hover:bg-green-500' to="/about">About</NavLink>
        <NavLink className='py-2 px-6 border-b-4 border-green-500 hover:text-white hover:bg-green-500' to="/savedevents">View Your Saved Events</NavLink>
        <NavLink className='py-2 px-6 border-b-4 border-green-500 hover:text-white hover:bg-green-500' to="/signedup">Events You Have Signed Up For</NavLink>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        </nav>
    )}
  
  export default NavBar;