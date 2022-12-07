import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featude.css";

const Featude = () => {
  const { data, loding } = useFetch(
    "/hotels/countByCity?cities=new,london,berline"
  );

  return (
    <div className="featured">
      {loding ? (
        "Loading......."
      ) : (
        <>
          {data && (
            <>
              <div className="featuredItem">
                <img
                  src="https://cdn.pixabay.com/photo/2021/06/01/12/39/beach-6301597__340.jpg"
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1>New</h1>
                  <h2>{data[0]} properties</h2>
                </div>
              </div>
              <div className="featuredItem">
                <img
                  src="https://cdn.pixabay.com/photo/2019/10/08/04/16/dragon-palace-hotel-4534092__340.jpg"
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1>London</h1>
                  <h2>{data[1]} properties</h2>
                </div>
              </div>
              <div className="featuredItem">
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/19/00/18/water-165219__340.jpg"
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1>Berline</h1>
                  <h2>{data[2]} properties</h2>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Featude;
