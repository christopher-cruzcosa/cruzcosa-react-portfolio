import React from "react";
// import Card from "../components/Card";
// import friends from "../projects.json";

function Portfolio() {
    return (
        <div>
            <br />
            <div classNameName="row">
                <div className="col mb-3 ml-2 justify-content-center">
                    <h4>Web Dev Portfolio</h4>
                </div>
            </div>
            <div style={{
            paddingTop: "50px",
            height: "100%",
            display: "flex",
            flexFlow: "row wrap",
            padding: "20px",
            justifyContent: "space-around",
            alignContent: "flex-start",
            overflow: "auto"
          }}>
            {/* {projects.map(project => (
                <Card
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    link={project.link}
                    gitLink={project.gitLink}
                />
            ))} */}
            </div>
        </div>

    );
}

export default Portfolio;