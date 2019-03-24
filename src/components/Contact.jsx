import React from "react";

const Contact = () => {
  return (
    <div id="contact" className=" py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 contact-bg-image">
            <div className="overlay">
              <div className="d-flex mb-4">
                <i className="fa fa-map-marker" style={{ fontSize: 25 }} />

                <div className="ml-3">
                  <div className="pb-2">Address</div>
                  <div>
                    Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US
                  </div>
                </div>
              </div>

              <div className="d-flex mb-4">
                <i className="fa fa-phone" style={{ fontSize: 25 }} />

                <div className="ml-3">
                  <div className="pb-2">Lets Talk</div>
                  <div>+1 800 1236879</div>
                </div>
              </div>

              <div className="d-flex mb-4">
                <i className="fa fa-envelope" style={{ fontSize: 25 }} />

                <div className="ml-3">
                  <div className="pb-2">General Support</div>
                  <div>contact@ashwood.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mx-auto">
            <h2 className="text-center mb-4">Send Us A Message</h2>

            {/* <label htmlFor="firstname">Firstname</label> */}
            <div className="d-flex mb-2">
              <input
                type="text"
                placeholder="Firstname"
                className="form-control mr-2"
              />

              <input
                type="text"
                placeholder="Lastname"
                className="form-control"
              />
            </div>

            <input
              type="text"
              placeholder="Email"
              className="form-control mb-2"
            />
            <input
              type="text"
              placeholder="Phone"
              className="form-control mb-2"
            />

            <textarea
              placeholder="Message"
              className="form-control mb-2"
              rows="3"
            />

            <button className="btn btn-success px-3 py-2">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
