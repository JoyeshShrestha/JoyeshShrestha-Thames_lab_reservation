
import "./app.css"
import img from "./img/2.png"
import itlogo from "./img/itcenterlogo.png"
import home from "./img/homeicon.png"



function App() {
  return (
    <>
    <nav className="navbar navbar-dark navcol shadow p-3  bg-body rounded">
    <div className="container-fluid">
    {/* <a className="navbar-brand"><img src={itlogo} alt="" /></a> */}

    <div className=" lab-title text-lowercase">
      <span className="lab">Lab</span> Reservation<span className="lab">.</span>
    </div>
    <a className="navbar-brand"><img src={img} alt="" /></a>
    
  </div>

</nav>

<div className="container-fluid">
  <div className="row">
    <div className="col-2 border sidebar rounded">
      <div className="container-fluid">
        <div className="row  tabs my-4">
          <div className="col-7 text-left">
          Home 
          </div>
         
        </div>
        <div className="row tabs my-4 ">
        <div className="col-7 text-left">
          Book Now
          </div>
          
        </div>
      </div>
    </div>
   
    <div className="col border main rounded m-4">
      <div className="container">
        <div className="row">
          
          
        </div>
        
      </div>
    </div>
  </div>
  
</div>

    </>
  );
}

export default App;
