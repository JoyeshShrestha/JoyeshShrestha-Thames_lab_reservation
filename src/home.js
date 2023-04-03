import React from 'react'
import img from "./img/2.png"
import {Link} from "react-router-dom"
// import itlogo from "./img/itcenterlogo.png"
// import h from "./img/homeicon.png"
import Day from './component/day'
import "./app.css"
import Nav from "./nav"
function home() {
  return (
   <>
    
<Nav/>
<div className="container-fluid">
  <div className="row">
    <div className="col-2 border sidebar rounded">
      <div className="container-fluid">
        <Link to="/"><div className="row  tabs my-4">
          <div className="col-7 text-left">
          Home 
          </div>
          
        </div>
        </Link>
        <Link to="/booknow">
        <div className="row tabs my-4 ">
        <div className="col-7 text-left">
          Book Now
          </div>
          
        </div>
        </Link>
      </div>
    </div>
   
    <div className="col border main rounded m-4">
      <div className="container">
        <div className="row mt-5">
          
          <Day />

        </div>
        
      </div>
    </div>
  </div>
  
</div>
   </>
  )
}

export default home
