import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const [openOption, setOpeoption] = useState(false);
  const [destanition, setDestanition] = useState("");
  const [optionl, setOption] = useState({
    adult: 3,
    children: 0,
    room: 2,
  });
  const [openDate, setOpendate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();

  const handaleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? optionl[name] + 1 : optionl[name] - 1,
      };
    });
  };

  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(SearchContext);

  const handaleSerch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destanition, date, optionl } });
    navigate("/hotels", { state: { destanition, date, optionl } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <i className="fa-solid fa-bed"></i>
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <i className="fa-solid fa-plane"></i>
            <span>Flight</span>
          </div>
          <div className="headerListItem">
            <i className="fa-solid fa-car"></i>
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <i className="fa-solid fa-bed"></i>
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <i className="fa-solid fa-taxi"></i>
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            {" "}
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
           {!user && <button className="headerBtn">Sign in / Register</button>}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <i className="headerIcon fa-solid fa-bed"></i>
                <input
                  className="headerSearchInput"
                  type="text"
                  placeholder="Where are you going?"
                  onChange={(e) => setDestanition(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <i className="headerIcon fa-solid fa-calendar-days"></i>
                <span
                  onClick={() => setOpendate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyy")} To ${format(
                  date[0].endDate,
                  "MM/dd/yyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>

              <div className="headerSearchItem">
                <i className="headerIcon fa-solid fa-person"></i>
                <span
                  className="headerSearchText"
                  onClick={() => setOpeoption(!openOption)}
                >{`${optionl.adult} Adults ${optionl.children} Children ${optionl.room} Room`}</span>
                {openOption && (
                  <div className="options">
                    <div className="optionItem">
                      <span>Adult</span>{" "}
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          disabled={optionl.adult <= 1}
                          onClick={() => handaleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounter">{optionl.adult}</span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handaleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span>Child</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          disabled={optionl.children <= 0}
                          onClick={() => handaleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounters">
                          {optionl.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handaleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span>Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={optionl.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handaleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounters">{optionl.room}</span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handaleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handaleSerch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
