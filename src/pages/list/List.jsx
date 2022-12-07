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
  console.log(location);

  const { data } = useFetch("/hotels/?featured=true&limit=2");

console.log(data);
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
                onChange={() => setDestanition()}
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
                    <input type="number" className="lsOptionInput" />
                  </div>

                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
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
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
