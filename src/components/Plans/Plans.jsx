import React, { Fragment } from "react";
import "./Plans.scss";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <Fragment>
      <div className="plans__container">
        <div className="program__header" style={{ gap: "2rem" }}>
          <span className="stroke-text">READY TO START</span>
          <span> YOUR JOURNEY </span>
          <span className="stroke-text">NOW WITH US</span>
        </div>

        {/* Plans Card */}
        <div className="plans">
          {plansData.map((plan, i) => (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span> $ {plan.price}</span>

              {/* Features */}
              <div className="features">
                {plan.features.map((feature, i) => (
                  <div className="feature">
                    <img src={whiteTick} alt="" />
                    <span key={i}>{feature}</span>
                  </div>
                ))}
                <div>
                  <span> See More Benifits -- </span>
                </div>
                <button className="btn"> Join More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Plans;
