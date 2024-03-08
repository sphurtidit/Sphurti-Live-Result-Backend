import { useState } from 'react';
import './Table_Tennis.css';


const Table_Tennis = ({ boy1Name, boy2Name, girl1Name, girl2Name }) => {
  const [viewingBoysMatch, setViewingBoysMatch] = useState(true);
  const [boy1Scores, setboy1Scores] = useState([0,0,0,0,0]);
  const [boy2Scores, setboy2Scores] = useState([0,0,0,0,0]);
  const [girl1Scores, setgirl1Scores] = useState([0,0,0]);
  const [girl2Scores, setgirl2Scores] = useState([0,0,0]);


  const handleViewBoysMatch = () => {
    setViewingBoysMatch(true);
    // setPlayer1Scores([0,0,0]);
    // setPlayer2Scores([0,0,0]);
  };

  const handleViewGirlsMatch = () => {
    setViewingBoysMatch(false);
    // setPlayer1Scores([0,0,0]);
    // setPlayer2Scores([0,0,0]);
  };

  const handleScoreChange = (index, player) => (e) => {
    const newScores = [...(player === 'player1' ? boy1Scores : boy2Scores)];
    newScores[index] = parseInt(e.target.value) || 0;
    if(viewingBoysMatch){
      if (player === 'player1') {
        setboy1Scores(newScores);
      } else {
        setboy2Scores(newScores);
      }
    }
    else{
      if (player === 'player1') {
        setgirl1Scores(newScores);
      } else {
        setgirl2Scores(newScores);
      }
    }
  };

  return (
    <div className="scorecard-container">
      <div className="scorecard-buttons">
        <button onClick={handleViewBoysMatch} className={viewingBoysMatch ? 'active' : ''}>
          Boys Match
        </button>
        <button onClick={handleViewGirlsMatch} className={!viewingBoysMatch ? 'active' : ''}>
          Girls Match
        </button>
      </div>
      <table className="scorecard-table">
      {viewingBoysMatch? <><thead>
                  <tr>
                      <th>Player</th>
                      <th>Set 1</th>
                      <th>Set 2</th>
                      <th>Set 3</th>
                      <th>Set 4</th>
                      <th>Set 5</th>
                  </tr>
              </thead><tbody>

                      <tr>
                          <td>{boy1Name}</td>

                          {boy1Scores.map((score, index) => (
                              <td key={index}>
                                  <input
                                      type="number"
                                      value={score || ''}
                                      onChange={handleScoreChange(index, 'player1')} />
                              </td>
                          ))}
                      </tr>
                      <tr>
                          <td>{boy2Name}</td>
                          {boy2Scores.map((score, index) => (
                              <td key={index}>
                                  <input
                                      type="number"
                                      value={score || ''}
                                      onChange={handleScoreChange(index, 'player2')} />
                              </td>
                          ))}
                      </tr>
                  </tbody></> : 
         <><thead>
                      <tr>
                          <th>Player</th>
                          <th>Set 1</th>
                          <th>Set 2</th>
                          <th>Set 3</th>
                      </tr>
                  </thead><tbody>

                          <tr>
                              <td>{girl1Name}</td>

                              {girl1Scores.map((score, index) => (
                                  <td key={index}>
                                      <input
                                          type="number"
                                          value={score || ''}
                                          onChange={handleScoreChange(index, 'player1')} />
                                  </td>
                              ))}
                          </tr>
                          <tr>
                              <td>{girl2Name}</td>
                              {girl2Scores.map((score, index) => (
                                  <td key={index}>
                                      <input
                                          type="number"
                                          value={score || ''}
                                          onChange={handleScoreChange(index, 'player2')} />
                                  </td>
                              ))}
                          </tr>
                      </tbody></>}
       
      </table>
    </div>
  );
};

export default Table_Tennis;
