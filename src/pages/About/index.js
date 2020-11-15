import {React} from "react";

function About() {
  return (
            <div>
                <br/>
                <div className="row ml-2">
                    <div className="col-lg-9">
                        <h3>About</h3>
                        <br/>
                        <p className="float-left">
                            <img className="img-fluid float-left mr-5 mb-3" src={'/images/headshot.jpg'}
                                alt="headshot" style={{width: "33%", height: "33%"}}/>
                            An IT professional with over 12 years of experience, primarily in
                            the public service sector. Originally from Texas, I went to NYU for college and fell in
                            love with the city. After receiving my B.A. in Ecomomics and Politics, I immediately
                            joined the US Army and spent four years on active duty.

                            After completing my tour of duty, I returned to NYC and spent ~ 10 years working in NYC
                            government, primarily in the data analysis and customer success fields.
                            <br/><br/>
                            However, I moved to San Diego in 2020 where I now reside with my family in Carmel
                            Valley. To further grow my formal technology skillset, I'm currently enrolled in a
                            Fullstack Web Development Bootcamp, through UC San Diego. I expect
                            to
                            graduate in late Nov, 2020 and afterwards I'm eager to dive into the web development
                            professional
                            space here in California.
                            <br/><br/>
                            Please reach out to me with any job opportunities you wish to discuss - full-time
                            positions and freelance welcome.
                        </p>
                        <div style={{clear:"both"}}></div>
                        <br/>

                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                <strong>Email:</strong> <a
                                    href="mailto:christopher.cruzcosa@gmail.com" style={{color: "#F0810F"}}><strong>christopher-cruzcosa@gmail.com</strong></a>
                            </li>
                            <li>
                                <strong>Github:</strong> <a
                                    href="https://github.com/christopher-cruzcosa" target="_blank" rel="noreferrer" style={{color: "#F0810F"}}><strong>christopher-cruzcosa</strong></a>
                            </li>
                            <li>
                                <strong>LinkedIn:</strong> <a
                                    href="https://www.linkedin.com/in/christopher-cruzcosa/" target="_blank" rel="noreferrer" style={{color: "#F0810F"}}><strong>Christopher
                                        Cruzcosa</strong></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
);
}

export default About;