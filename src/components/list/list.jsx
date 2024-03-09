import React, { useState } from 'react';
import './list.css';
import Badminton from '../Badminton/Badminton';
import Basketball from '../Basketball/Basketball';
import Cricket from '../Cricket/Cricket';
import Football from '../Football/Football';
import TableTennis from '../Table_Tennis/Table_Tennis';
import Volleyball from '../Volleyball/Volleyball';

const MatchList = ({ list, sportIndex }) => {

  const componentList = [Cricket, Football, Volleyball, Basketball, Basketball, TableTennis, TableTennis, Badminton, Badminton]

  return (
    <div className='listContainer'>
      {list.map((item, index) => {
        const [displayFull, setDisplayFull] = useState(false);

        return (
          <div key={index} className='matchTile'>
            <div className="heading-title">
              <p><span className='matchTitle'>{item.name}</span> - {item.team1} vs {item.team2}</p>
              <div>
                <button onClick={
                  () => {
                    setDisplayFull(!displayFull);
                  }
                }>{displayFull ? 'Update' : 'Edit Now'}</button>
                {displayFull ? <button onClick={
                  () => {
                  }
                }>Update and Lock</button> : <></>}
              </div>
            </div>
            {displayFull ? <Football /> : <></>}
          </div>
        )
      })
      }
    </div>
  );
};

export default MatchList;