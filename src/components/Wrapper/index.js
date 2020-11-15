import React from "react";

function Wrapper(props) {
   return <div className="container" {...props} style={{color: "whitesmoke"}}></div>
   
//    <main className="flex-shrink-0 mainbody">
//        <div className="container" style={{backgroundColor: "whitesmoke"}} {...props} ></div>
//    </main>;
}

export default Wrapper;