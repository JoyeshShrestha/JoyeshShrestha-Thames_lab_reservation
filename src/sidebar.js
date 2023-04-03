import React from 'react'
import {Link} from "react-router-dom"
export default function sidebar() {
  return (
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
  )
}
