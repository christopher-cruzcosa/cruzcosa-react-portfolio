import { React } from "react";
import { NavLink } from "react-router-dom";
import './style.css';


function Front() {
  return (
    <div className="bg" >
      <div style={{ color: "black" }}>
        <br />
        <h4 className="pl-2" style={{ fontSize: "4em" }}>Hi, I'm Chris.</h4>
        <br />
        <br />
        <br />
        <div className="container" style={{color: "#F0810F", fontSize: "1.5em", fontWeight: "900", maxWidth: "90vw"}}>
          <p className="text-right" >Welcome to this island I've carved out of the much wider sea.</p>
          <p className="text-right" >You're welcome to take a look around, before you set sail again.</p>
          <p className="text-right" >The sunsets are beautiful here.</p>
          <p className="text-right" ><NavLink class="btn btn-outline-dark justify-content-right" to="/portfolio">View Projects <i class="icon-briefcase3"></i></NavLink></p>
        </div>
      </div>
    </div>
  );
}

export default Front;