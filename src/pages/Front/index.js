import { React } from "react";
import './style.css';


function Front() {
  return (
    <div className="bg" style={{height: "40em", width: "60em"}}>
      <div className="message">
      <p style={{fontSize: "3em"}}>Hi, I'm Chris.</p>
      <br/>

      <p style={{width: "400px"}}>Welcome to this island I've carved out of the much wider sea.</p>
      <p style={{width: "400px"}}>You're more than welcome to take a look around, before you set sail again.</p>
      <p style={{width: "400px"}}>The sunsets are beautiful here.</p>
      </div>
    </div>
  );
}

export default Front;