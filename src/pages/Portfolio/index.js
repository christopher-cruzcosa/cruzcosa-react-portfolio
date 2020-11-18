import React from "react";
import Projects from "../../components/Projects";
import ProjectData from "../../data/projects.json";

function Portfolio() {
    return (
            <div className="container">
                <br />
                <div className="row">
                    <div className="col mb-3 ml-2 justify-content-center">
                        <h4>Project Portfolio</h4>
                    </div>
                </div>
                <br />
                <div className="cardContainer">
                    {ProjectData.map(project => (
                        <Projects
                            id={project.id}
                            key={project.id}
                            name={project.name}
                            image={project.image}
                            link={project.link}
                            gitLink={project.gitLink}
                            desc={project.desc}
                            build={project.build}
                        />
                    ))}
                </div>
                <div style={{ clear: "both" }}></div>
            </div>

    );
}

export default Portfolio;