import useCustomForm from "components/UI/custom-form/CustomForm";
import React from "react";
import useSignUpForm from "./UseSignUpForm";
import { FiMapPin } from "react-icons/fi";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact__form">
          <div className="contact__form-form">
            <div className="contact__form-form-title">
              <h3 className="">Hello</h3>
            </div>
            <div className="contact__form-form-main">
              <div className="contact__form-form-item m-t-24">
                <div className="w-50">
                  <input
                    className={`contact__form-form-control ${
                      true && "is-danger"
                    }`}
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="w-50">
                  <input
                    className={`contact__form-form-control ${
                      true && "is-danger"
                    }`}
                    type="text"
                    name="email"
                    placeholder="email"
                  />
                </div>
              </div>
              <div className="contact__form-form-item  m-t-24">
                <div className="w-100">
                  {" "}
                  <input
                    className={`contact__form-form-control ${
                      true && "is-danger"
                    }`}
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="contact__form-form-item  m-t-24">
                <div className="w-100">
                  <textarea
                    className="contact__form-form-control contact__form-form-control--textarea"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__form-info">
            <div className="contact__form-info-wrap">
              <h3 className="contact__form-text contact__form-text--title m-t-12">
                Contact us
              </h3>
              <div className="contact__form-info-texts m-t-20">
                <div className="contact__form-info-icon">
                  <FiMapPin className="icon" />
                </div>
                <div className="contact__form-info-text">
                  <span className="contact__form-text contact__form-text--info-text">
                    Address: jimluviu, 143
                  </span>
                </div>
              </div>
              <div className="contact__form-info-texts m-t-20">
                <div className="contact__form-info-icon">
                  <FiMapPin className="icon" />
                </div>
                <div className="contact__form-info-text">
                  <span className="contact__form-text contact__form-text--info-text">
                    Email: jimluviu@gmail.com
                  </span>
                </div>
              </div>
              <div className="contact__form-info-texts m-t-20">
                <div className="contact__form-info-icon">
                  <FiMapPin className="icon" />
                </div>
                <div className="contact__form-info-text">
                  <span className="contact__form-text contact__form-text--info-text">
                    Phone: 0912-123-123
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className="wrapper">
            <div className="row no-gutters">
              <div className="col-md-7 d-flex align-items-stretch">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Get in touch</h3>
                  <div id="form-message-warning" className="mb-4"></div>
                  <div id="form-message-success" className="mb-4">
                    Your message was sent, thank you!
                  </div>
                  <form method="POST" id="contactForm" name="contactForm">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            cols="30"
                            rows="7"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            value="Send Message"
                            className="btn btn-primary"
                          />
                          <div className="submitting"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-stretch">
                <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                  <h3 className="mb-4 mt-md-4">Contact us</h3>
                  <div className="dbox w-100 d-flex align-items-start">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Address:</span> 198 West 21th Street, Suite 721
                        New York NY 10016
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Phone:</span>{" "}
                        <a href="tel://1234567920">+ 1235 2355 98</a>
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Email:</span>{" "}
                        <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-globe"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span>Website</span> <a href="#">yoursite.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
