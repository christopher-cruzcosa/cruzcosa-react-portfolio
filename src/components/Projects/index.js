import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="card card-project mb-3" style={{ width: "30em", height: "30em" }}>
            <div className="img-container">
                <img className="card-img-top" src={process.env.PUBLIC_URL + props.image} alt={props.name} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.desc}</p>
                <p className="card-text">Built Using: {props.build}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <a href={props.link} rel="noreferrer" target="_blank" className="card-link"><strong>Deployed App</strong></a>
                    <a href={props.gitLink} rel="noreferrer" target="_blank" className="card-link"><strong>GitHub Repo</strong></a></li>
            </ul>
        </div>
    );
}


export default Project;