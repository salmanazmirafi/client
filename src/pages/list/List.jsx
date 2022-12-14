import "./list.css";
import Header from "../../component/header/Header";
import Navbar from "../../component/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import SearchItem from "../../component/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destanition, setDestanition] = useState(location.state.destanition);
  const [optionl, setOption] = useState(location.state.optionl);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, reFetch } = useFetch(
    `https://booking-app-u9py.onrender.com/api/hotels/?city=${destanition}&min=${
      min || 0
    }&max=${max || 999} `
  );

  const handel = () => {
    reFetch();
  };


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input
                type="text"
                placeholder={destanition}
                onChange={(e) => setDestanition(e.target.value)}
              />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} To ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="IsOptions">
                <div className="IsOptionsItem">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      onChange={(e) => setMin(e.target.value)}
                      className="lsOptionInput"
                    />
                  </div>

                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      onChange={(e) => setMax(e.target.value)}
                      className="lsOptionInput"
                    />
                  </div>

                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      min={1}
                      type="number"
                      placeholder={optionl.adult}
                      onChange={() => setOption()}
                      className="lsOptionInput"
                    />
                  </div>

                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      min={0}
                      type="number"
                      placeholder={optionl.children}
                      className="lsOptionInput"
                    />
                  </div>

                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      min={1}
                      type="number"
                      placeholder={optionl.room}
                      className="lsOptionInput"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handel}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "Loading......."
            ) : (
              <>
                {data.map((item) => (
                  <>
                    <SearchItem item={item} key={item._id} />
                  </>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
