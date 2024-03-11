import React, { useEffect, useState } from "react";
import "./list.css";
import Badminton from "../Badminton/Badminton";
import Basketball from "../Basketball/Basketball";
import Cricket from "../Cricket/Cricket";
import Football from "../Football/Football";
import TableTennis from "../Table_Tennis/Table_Tennis";
import Volleyball from "../Volleyball/Volleyball";

const MatchList = ({ list, sportIndex, name}) => {
  const [displayFull, setDisplayFull] = useState({});
  useEffect(() => {
    setDisplayFull({})
    list.map((item, index) => {
      setDisplayFull((prev) => ({ ...prev, [index]: false }));
      console.log(displayFull)
    });
  }, [list])
  
  return (
    <div className="listContainer">
      <h1>{name}</h1>
      {list.map((item, index) => {
        return (
          <div key={index} className="matchTile">
            <div className="heading-title">
              <p>
                <span className="matchTitle">{item.name}</span> - {item.team1}{" "}
                vs {item.team2}
              </p>
              <button
                onClick={() => {
                  setDisplayFull((prev) => ({
                    ...prev,
                    [index]: !prev[index],
                  })
                  );
                }}
              >
                { displayFull[index] ? "Close" : "Edit Now"}
              </button>
            </div>
            {displayFull[index] ? (
              sportIndex == 0 ? (
                <Cricket matchData={item} />
              ) : sportIndex == 1 ? (
                <Football matchData={item} />
              ) : sportIndex == 2 ? (
                <Volleyball matchData={item} />
              ) : sportIndex == 3 ? (
                <Basketball matchData={item} type="boys" />
              ) : sportIndex == 4 ? (
                <Basketball matchData={item} type="girls" />
              ) : sportIndex == 5 ? (
                <TableTennis matchData={item} type="boys" />
              ) : sportIndex == 6 ? (
                <TableTennis matchData={item} type="mixed" />
              ) : sportIndex == 7 ? (
                <Badminton matchData={item} type="boys" />
              ) : sportIndex == 8 ? (
                <Badminton matchData={item} type="girls" />
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MatchList;
