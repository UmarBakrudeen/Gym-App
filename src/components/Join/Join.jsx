import React, { Fragment, useRef } from "react";
import "./Join.scss";

import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iq8axcj",
        "template_z08a3i4",
        form.current,
        "GMTRKncUxYg0VpXgZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Fragment>
      <div className="Join" id="join-us">
        <div className="left-j">
          <hr />
          <div>
            <span className="stroke-text"> READY TO </span>
            <span> LEVEL UP </span>
          </div>
          <div>
            <span> YOUR BODY </span>
            <span className="stroke-text"> WITH US ?</span>
          </div>
        </div>
        <div className="right-j">
          <form
            ref={form}
            action=""
            className="email-container"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_email"
              placeholder="Enter your Email Address"
            />
            <button className="btn btn-join"> Join Now </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Join;
