import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCopyright,
} from "react-icons/fa";
const ContactPage = () => {
  return (
    <section>
      <div className="main-content">
        <div className="left box">
          <h2>About Us</h2>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              voluptates accusamus tempore consectetur recusandae ipsum
              laboriosam assumenda ea alias laudantium illum, blanditiis
              voluptatibus impedit officia.
            </p>
            <div className="social">
              <a href="#">
                <span className="fa facebook">
                  {" "}
                  <FaFacebook />
                </span>
              </a>
              <a href="#">
                <span className="fa twitter">
                  {" "}
                  <FaTwitter />
                </span>
              </a>
              <a href="#">
                <span className="fa instagram">
                  {" "}
                  <FaInstagram />
                </span>
              </a>
              <a href="#">
                <span className="fa globe">
                  {" "}
                  <FaGlobe />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
              <span className="fa marker">
                <FaMapMarkerAlt />
              </span>
              <span className="text">Put your Address, here</span>
            </div>
            <div className="phone">
              <span className="fa phone">
                <FaPhoneAlt />
              </span>
              <span className="text">123-123-1234</span>
            </div>
            <div className="email">
              <span className="fa email">
                <FaEnvelope />
              </span>
              <span className="text">sampleEmail@email.com</span>
            </div>
          </div>
        </div>
        <div className="right box">
          <h2>Contact Us</h2>
          <div className="content">
            <form action="#">
              <div className="email">
                <div className="text">Email</div>
                <input type="email" name="" id="" required />
              </div>
              <div className="msg">
                <div className="text">Message</div>
                <textarea name="" id="" cols="25" rows="3"></textarea>
              </div>
              <div className="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">
            Created By <a href="#">RaymondJAT</a> |{" "}
          </span>
          <span className="fa copyright">
            <FaCopyright />
          </span>
          <span>2024 All rights reserved.</span>
        </center>
      </div>
    </section>
  );
};

export default ContactPage;
