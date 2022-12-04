import React from "react";
import "./featude.css";

const Featude = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2021/06/01/12/39/beach-6301597__340.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>60 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2019/10/08/04/16/dragon-palace-hotel-4534092__340.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>160 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.pixabay.com/photo/2013/07/19/00/18/water-165219__340.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>560 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featude;
