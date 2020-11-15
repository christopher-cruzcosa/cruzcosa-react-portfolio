import React from "react";

function Contact() {
    return (
        <div>
            <br/>
            <div className="row">
                <div className="col-lg-9">
                    <div className="card border-light">
                        <div className="card-body mb-3">
                            <h1 className="card-title">Contact</h1>
                            <br />
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Name</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Jane Doe" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Type a short message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#011A27", borderColor: "#011A27", color: "#E6DF44" }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;