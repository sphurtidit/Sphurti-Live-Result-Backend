import React from 'react';

const MatchList = ({list, sportIndex}) => {

    return (
        <div>
          {list.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.team1} vs {item.team2}</p>
              </div>
            )
          })
          }
        </div>
    );
};

export default MatchList;