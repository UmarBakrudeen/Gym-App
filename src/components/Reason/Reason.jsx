import React, { Fragment } from "react";
import "./Reason.scss";

// Images
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reason = () => {
  return (
    <Fragment>
      <div className="reason" id="reason">
        <div className="reason__left">
          <img src={image1} alt="" className="img1" />
          <img src={image2} alt="" className="img2" />
          <img src={image3} alt="" className="img3" />
          {/* <img src={image4} alt="" className="img4" /> */}
        </div>
        <div className="reason__right">
          <span>Some Reason </span>
          <div>
            <span className="stroke-text "> Why </span>
            <span> choose us</span>
          </div>

          <div className="details__reason">
            <div>
              <img src={tick} alt="" />
              <span> OVER 140+ EXPERT COACHS </span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span> TRAIN SMARTER AND FASTER THAN BEFORE </span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span> 1 FREE PROGRAM FOR NEW MEMBER </span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span> RELIABLE PARTNERS </span>
            </div>
          </div>

          {/* Our Partners */}
          <span style={{ color: "var(--gray)" }}> OUR PARTNERS </span>
          <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Reason;
