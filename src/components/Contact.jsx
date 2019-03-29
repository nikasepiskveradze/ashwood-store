import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <React.Fragment>
      <div id="contact" className="contact-bg-image pt-5">
        <div className="container">
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

      <iframe
        className="w-100"
        height="500"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Tbilisi&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        title="Map"
      />
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
