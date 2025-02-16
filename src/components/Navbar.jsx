import { useState } from "react";

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
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
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