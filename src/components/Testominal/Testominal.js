import React, { Fragment, useState } from "react";
import "./Testominal.scss";
import { testimonialsData } from "../../data/testimonialsData";

import LeftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testominal = () => {
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;

  return (
    <Fragment>
      <div className="Testominal">
        <div className="left-t">
          <span> Testominal </span>
          <span className="stroke-text"> What they </span>
          <span> say about us </span>
          <span>{testimonialsData[0].review}</span>
          <span>
            <span style={{ color: "var(--orange)" }}>
              {testimonialsData[selected].name}
            </span>
            - {testimonialsData[selected].status}
          </span>
        </div>
        <div className="right-t">
          <div></div>
          <div></div>
          <img src={testimonialsData[selected].image} alt="" />

          <div className="arrows">
            <img
              src={LeftArrow}
              alt=""
              onClick={() => {
                selected === 0
                  ? setSelected(tlength - 1)
                  : setSelected((prev) => prev - 1);
              }}
            />
            <img
              src={rightArrow}
              alt=""
              onClick={() => {
                selected === tlength - 1
                  ? setSelected(0)
                  : setSelected((prev) => prev + 1);
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testominal;
