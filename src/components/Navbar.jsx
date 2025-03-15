import { useState } from "react";
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useOnlineStatus";


function Navbar() {
  const[login,setLogin]=useState(false)

  function log(){
    setLogin(!login)
  }

  const status=useonlineStatus()

  return (
    <div className='header'>
    <div className='logo'>
        <Link to="/"><img src="https://static.vecteezy.com/system/resources/thumbnails/015/150/683/small_2x/head-with-brain-icon-design-for-artificial-intelligence-technology-theme-png.png" /></Link>
    </div>
    <div className='nav'>
        <ul>
        <li> Online Status: {status? "🟢" : "🔴"} </li>
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