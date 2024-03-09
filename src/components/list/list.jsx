import React, { useState } from 'react';
import './list.css';
import Badminton from '../Badminton/Badminton';
import Basketball from '../Basketball/Basketball';
import Cricket from '../Cricket/Cricket';
import Football from '../Football/Football';
import TableTennis from '../Table_Tennis/Table_Tennis';
import Volleyball from '../Volleyball/Volleyball';

const MatchList = ({ list, sportIndex }) => {

  // const componentList = [Cricket, Football, Volleyball, Basketball, Basketball, TableTennis, TableTennis, Badminton, Badminton]

  return (
    <div className='listContainer'>
      {list.map((item, index) => {
        const [displayFull, setDisplayFull] = useState(false);
        return (
          <div key={index} className='matchTile'>
            <div className="heading-title">
              <p><span className='matchTitle'>{item.name}</span> - {item.team1} vs {item.team2}</p>
                <button onClick={
                  () => {
                    setDisplayFull(!displayFull);
                  }
                }>{!displayFull ? 'EDIT NOW' : 'Close'}</button>
            </div>
            {displayFull ? 
              sportIndex == 0? <Cricket matchData={item} /> : 
              sportIndex == 1? <Football matchData={item} /> :
              sportIndex == 2? <Volleyball matchData={item} /> :
              sportIndex == 3? <Basketball item={item} /> :
              sportIndex == 4? <Basketball item={item} /> :
              sportIndex == 5? <TableTennis item={item} /> :
              sportIndex == 6? <TableTennis item={item} /> :
              sportIndex == 7? <Badminton item={item} /> :
              sportIndex == 8? <Badminton item={item} /> :
              <></>
             : <></>}
          </div>
        )
      })
      }
    </div>
  );
};

export default MatchList;