import React from "react";
import "./style.css";

function Project(props) {
    return (
        //     <div className="card card1">
        //         <div className="img-container">
        //         <a href={props.image} rel="noreferrer" target="_blank" ><img alt={props.name} src={process.env.PUBLIC_URL + props.image} /></a>
        //         </div>
        //         <div className="content">
        //             <ul>
        //                 <li>
        //                     <strong>Name:</strong> {props.name}
        //                 </li>
        //                 <li>
        //                     <strong>App:</strong> <a href={props.link} rel="noreferrer" target="_blank" >{props.link}</a>
        //                 </li>
        //                 <li>
        //                     <strong>GitHub Repo:</strong> <a href={props.gitLink} rel="noreferrer" target="_blank" >{props.gitLink}</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        <div className="card card-project mb-3" style={{ width: "32rem" }}>
            <div className="img-container">
                <img className="card-img-top" src={process.env.PUBLIC_URL + props.image} alt={props.name} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.desc}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <a href={props.link} rel="noreferrer" target="_blank" className="card-link"><strong>Deployed App</strong></a>
                    <a href={props.gitLink} rel="noreferrer" target="_blank" className="card-link"><strong>GitHub Repo</strong></a></li>
                <li className="list-group-item">Built in JS</li>
                <li className="list-group-item">Uses an External API</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    );
}


export default Project;