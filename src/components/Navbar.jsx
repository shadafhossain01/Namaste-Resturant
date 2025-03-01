import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const[login,setLogin]=useState(false)

  function log(){
    setLogin(!login)
  }

  return (
    <div className='header'>
    <div className='logo'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/015/150/683/small_2x/head-with-brain-icon-design-for-artificial-intelligence-technology-theme-png.png" />
    </div>
    <div className='nav'>
        <ul>
            <li> <Link to="/"> Home</Link> </li> 
            <li> <Link to="/about"> About </Link> </li>  
            <li> <Link to="/menu">Menu </Link> </li>  
            <li> <Link to="/contact">Contact</Link> </li>   
        <button className={`log-btn ${login?"redbtn":"yellowbtn"} `} onClick={log}>{
          login?
          "Log Out"
          :
          "Log In"
        }</button>
        </ul>
    </div>
    </div>
  )
}

export default Navbar;