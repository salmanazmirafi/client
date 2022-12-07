import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import MailList from "../../component/mailList/MailList";
import Navbar from "../../component/navbar/Navbar";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./hotel.css";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [open, setOpen] = useState(false);
  const [sliceNumber, setSliceNumber] = useState(0);

  const { data, loading } = useFetch(
    `https://booking-app-u9py.onrender.com/api/hotels/find/${id}`
  );


  const { date, optionl } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(date[0].endDate, date[0].startDate);




  const handaleOpen = (i) => {
    setSliceNumber(i);
    setOpen(true);
  };

  const arrowMove = (direction) => {
    let setDirection;
    if (direction === "i") {
      setDirection = sliceNumber === 0 ? 5 : sliceNumber - 1;
    } else {
      setDirection = sliceNumber === 5 ? 0 : sliceNumber + 1;
    }
    setSliceNumber(setDirection);
  };

  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      {loading ? (
        "loading........"
      ) : (
        <div className="hotelContainer">
          <div className="hotelWrapper">
            {open && (
              <div className="slider">
                <i
                  className="close fa-regular fa-circle-xmark"
                  onClick={() => setOpen(false)}
                ></i>
                <i
                  className="arrow fa-solid fa-circle-arrow-left"
                  onClick={() => arrowMove("i")}
                ></i>
                <div className="sliderWrapper">
                  <img
                    src={data.photos[sliceNumber]}
                    alt=""
                    className="sliderImg"
                  />
                </div>{" "}
                <i
                  className="arrow fa-solid fa-circle-arrow-right"
                  onClick={() => arrowMove("r")}
                ></i>
              </div>
            )}
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <i className="fa-solid fa-location-dot"></i>
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent hotel - {data.distance}m center
            </span>
            <span className="hotelPriceHighlight">
              book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((img, i) => (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => handaleOpen(i)}
                    src={img}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * optionl.room}</b>({days}
                  nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <MailList />
      <div className="foot">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
