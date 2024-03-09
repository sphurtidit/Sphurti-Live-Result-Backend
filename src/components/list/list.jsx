import React from 'react';

const MatchList = ({list}) => {

    return (
        <div>
          {list.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item.team1} vs {item.team2}</h1>
                
                {/* <p>{item.date}</p>
                <p>{item.time}</p> */}
              </div>
            )
          })
          }
        </div>
    );
};

export default MatchList;