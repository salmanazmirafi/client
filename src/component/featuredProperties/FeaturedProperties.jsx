import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("/hotels/?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? "Loading........." :
      <>
       {data.map((data)=>(
          <div className="fpItem" key={data._id}>
         <img
           src={data.photos}
           alt=""
           className="fpImg"
         />
         <span className="fpName">{data.name}</span>
         <span className="fpCity">{data.city}</span>
         <span className="fpPrice">Starting from ${data.cheapestPrice}</span>
         {data.rating&&<div className="fpRating">
           <button>{data.rating}</button>
           <span>Excellent</span>
         </div>}
       </div>
       ))
       
       }
      </>}
      
    </div>
  );
};

export default FeaturedProperties;
