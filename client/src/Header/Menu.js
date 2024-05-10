import React from "react";
import { Link } from "react-router-dom";

const Menu =()=>{
    return(
       <>
<div className="container-fluid">
  <div className="row bg-danger">
    <div className="col-12 col-md-6 d-flex">
      <div className="flex-grow-1">1</div>
    </div>
    <div className="col-12 col-md-6 bg-info d-flex justify-content-end align-items-center flex-column flex-md-row  justify-content-md-end align-items-md-end">
  <Link className="m-2" to={'/'}>Home</Link>
  <Link className="m-2" to={'/about'}>About</Link>
</div>
  </div>
</div>

 </>
    )
}

export default Menu; 