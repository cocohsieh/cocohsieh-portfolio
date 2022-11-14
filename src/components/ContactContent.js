import "./ContactContent.css";
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa"; //fa組的

import React from "react";

const ContactContent = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-info">
          <div style={{ marginBottom: 20 }}>
            <h3>
              <FaPhoneAlt style={{ marginRight: 10 }} />
              Cellphone
            </h3>
            <p>0916-009-307</p>
          </div>
          <div>
            <h3>
              <FaMailBulk style={{ marginRight: 10 }} />
              Email
            </h3>
            <p>qqqfangtwtw@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
