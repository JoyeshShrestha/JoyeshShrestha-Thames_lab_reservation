import React from 'react'
import img from "./img/2.png"
import Nav from "./nav"
import {Link} from "react-router-dom"
import Sidebar from "./sidebar"
function booknow() {
  return (
   <>
   <Nav />
<div className="container-fluid">
  <div className="row">
    <div className="col-2 border sidebar rounded">
    <Sidebar />
    </div>
   
    <div className="col border main rounded m-4">
      <div className="container">
        <div className="row">
          Book Now
          
        </div>
        
      </div>
    </div>
  </div>
  
</div>


   </>
  )
}

export default booknow
