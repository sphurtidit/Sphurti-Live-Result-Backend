import { useState } from 'react';
import './Table_Tennis.css';

const Table_Tennis = () => {
  const [player1Scores, setPlayer1Scores] = useState([0,0,0]);
  const [player2Scores, setPlayer2Scores] = useState([0,0,0]);

  const handleScoreChange = (index, player) => (e) => {
    const newScores = [...(player === 'player1' ? player1Scores : player2Scores)];
    newScores[index] = parseInt(e.target.value) || 0;
    if (player === 'player1') {
      setPlayer1Scores(newScores);
    } else {
      setPlayer2Scores(newScores);
    }
  };

  return (
    <div className="scorecard-container">
      <table className="scorecard-table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Set 1</th>
            <th>Set 2</th>
            <th>Set 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Player 1</td>
            {player1Scores.map((score, index) => (
              <td key={index}>
                <input
                  type="number"
                  value={score || ''}
                  onChange={handleScoreChange(index, 'player1')}
                />
              </td>
            ))}
          </tr>
          <tr>
            <td>Player 2</td>
            {player2Scores.map((score, index) => (
              <td key={index}>
                <input
                  type="number"
                  value={score || ''}
                  onChange={handleScoreChange(index, 'player2')}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table_Tennis;
