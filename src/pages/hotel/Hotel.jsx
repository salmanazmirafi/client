import { useState } from "react";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import MailList from "../../component/mailList/MailList";
import Navbar from "../../component/navbar/Navbar";
import "./hotel.css";

const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [sliceNumber, setSliceNumber] = useState(0);
  const image = [
    {
      src: "https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150__340.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071__340.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/21/17/34/las-vegas-1846684__340.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201__340.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/08/23/00/11/girl-3624933__340.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/11/06/11/45/interior-1026452__340.jpg",
    },
  ];

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
                  src={image[sliceNumber].src}
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
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <i class="fa-solid fa-location-dot"></i>
            <span>Enton st 125 New york</span>
          </div>
          <span className="hotelDistance">Excellent hotel - 500m center</span>
          <span className="hotelPriceHighlight">
            book a stay over $113 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {image.map((img, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handaleOpen(i)}
                  src={img.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of KaraKo</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus velit culpa aperiam accusantium dolorum odio facere
                deserunt maiores? Delectus, enim? Est eius iusto, perferendis
                nam quidem doloremque. Consectetur voluptatibus nihil voluptates
                ullam nobis laudantium numquam porro quia pariatur voluptatem
                modi vero possimus asperiores quos provident, ea enim cum,
                excepturi dolorem.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$123</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <div className="foot">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
