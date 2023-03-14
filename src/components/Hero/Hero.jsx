import React, { Fragment } from "react";
import Header from "../Header/Header";
import "./Hero.scss";

// Images
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <Fragment>
      <div className="hero">
        <div className="hero__left">
          <Header />

          {/* The Best Ad */}
          <div className="the-best-ad">
            <div></div>
            <span> The best fitness club in the town </span>
          </div>

          {/* Hero Heading */}
          <div className="hero__text">
            <div>
              <span className="stroke-text"> Sharp </span>
              <span> Your </span>
            </div>
            <div>
              <span> Ideal Body </span>
            </div>
            <div>
              <span>
                In here we will help you to shape and build your ideal body and
                live up your life to fullest.
              </span>
            </div>
          </div>

          {/* Figures */}
          <div className="figures">
            <div>
              <span> + 140 </span>
              <span> EXPERT COACHES </span>
            </div>
            <div>
              <span> + 978 </span>
              <span> MEMBERS JOINED </span>
            </div>
            <div>
              <span> + 50 </span>
              <span> FITNESS PROGRAMS </span>
            </div>
          </div>

          {/* Hero Button */}
          <div className="hero__buttons">
            <button className="btn"> Get Started </button>
            <button className="btn"> Learn More </button>
          </div>
        </div>
        <div className="hero__right">
          <button className="btn">Join Now</button>

          <div className="heart__rate">
            <img src={heart} alt="" />
            <span> Heart Rate </span>
            <span> 116 bpm </span>
          </div>

          {/* Hero Images */}
          <img src={hero_image} alt="" className="hero__img" />
          <img src={hero_image_back} alt="" className="hero__img__back" />
          <div className="calories">
            <img src={calories} alt="" />
            <div>
              <span> Calories Burned </span>
              <span> 220 kcal </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
