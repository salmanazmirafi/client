import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = () => {
  return (
    <>
      <div className="searchItem">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156__340.jpg"
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">Tower Steret Apartments</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            500m form centenFree airpost taxiStudion Apartment with air
            conditionaingEntire Studio.1 Bathrom.21rem 1 full bedFree
            cancellation You can cancel later so lock in this great price today
            detalls,
          </span>
          <span className="siCancelOp">Free cancellation </span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.3</button>
          </div>

          <div className="siDetailTexts">
            <span className="siPrice">$120</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to="/">
              <button className="siCheckButton">See availability</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
