import React from 'react'
import img from "./img/2.png"
export default function nav() {
  return (
    <nav className="navbar navbar-dark navcol shadow p-3  bg-body rounded">
    <div className="container-fluid">
    {/* <a className="navbar-brand"><img src={itlogo} alt="" /></a> */}

    <div className=" lab-title text-lowercase">
      <span className="lab">Lab</span> Reservation<span className="lab">.</span>
    </div>
    <a className="navbar-brand"><img src={img} alt="" /></a>
    
  </div>

</nav>
  )
}
