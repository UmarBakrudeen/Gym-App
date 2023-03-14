import React, { Fragment } from "react";
import "./Program.scss";

import RightArrow from "../../assets/rightArrow.png";

// Program Data
import ProgramData from "../../data/programsData";

export const Program = () => {
  return (
    <Fragment>
      <div className="program" id="program">
        <div className="program__header">
          <span className="stroke-text"> Explore Our </span>
          <span> Programs </span>
          <span className="stroke-text"> to shape you </span>
        </div>

        <div className="program__categories">
          {ProgramData.map((program) => (
            <div className="category">
              {program.image}
              <span> {program.heading} </span>
              <span> {program.details} </span>
              <div className="join__now">
                <span>Join Now </span>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
