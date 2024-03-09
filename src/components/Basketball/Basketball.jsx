import { useState } from "react";
import "./Basketball.css";

const Basketball = ({ teamAName, teamBName }) => {
  const [teamAScore, setTeamAScore] = useState([0, 0, 0, 0]);
  const [teamBScore, setTeamBScore] = useState([0, 0, 0, 0]);

  const updateScore = (team, quarter, value) => {
    if (team === "A") {
      const newScore = [...teamAScore];
      newScore[quarter - 1] = value;
      setTeamAScore(newScore);
    } else if (team === "B") {
      const newScore = [...teamBScore];
      newScore[quarter - 1] = value;
      setTeamBScore(newScore);
    }
  };

  const calculateTotalScore = (scoreArray) => {
    return scoreArray.reduce((acc, curr) => acc + curr, 0);
  };

  return (
    <div className="basketball">
      <div className="team">
        <h2>{teamAName}</h2>
        <div className='score-container'>
        <div className="scores">
          <div className="quarter">Q1</div>
          <div className="quarter">Q2</div>
          <div className="quarter">Q3</div>
          <div className="quarter">Q4</div>
          <div className="total">Total</div>
        </div>
        <div className="scores">
          {[1, 2, 3, 4].map((quarter, index) => (
            <input
              key={index}
              type="text"
              value={teamAScore[index]}
              onChange={(e) =>
                updateScore("A", quarter, parseInt(e.target.value))
              }
            />
          ))}
          <div className="total">{calculateTotalScore(teamAScore)}</div>
        </div>
        </div>
      </div>
      <div className="team">
        <h3>VS</h3>
      </div>
      <div className="team">
        <h2>{teamBName}</h2>
        <div className='score-container'>
        <div className="scores">
          <div className="quarter">Q1</div>
          <div className="quarter">Q2</div>
          <div className="quarter">Q3</div>
          <div className="quarter">Q4</div>
          <div className="total">Total</div>
        </div>
        <div className="scores">
          {[1, 2, 3, 4].map((quarter, index) => (
            <input
              key={index}
              type="text"
              value={teamBScore[index]}
              onChange={(e) =>
                updateScore("B", quarter, parseInt(e.target.value))
              }
            />
          ))}
          <div className="total">{calculateTotalScore(teamBScore)}</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Basketball;
