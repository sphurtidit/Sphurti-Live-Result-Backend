import { useState } from 'react';
import './Volleyball.css';
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Volleyball = ({ matchData }) => {
  const [lock, setLock] = useState(matchData.locked);
  const [team1Scores, setTeam1Scores] = useState([
    matchData.set1['team1'],
    matchData.set2['team1'],
    matchData.set3['team1']]);
  const [team2Scores, setTeam2Scores] = useState([
    matchData.set1['team2'],
    matchData.set2['team2'],
    matchData.set3['team2']]);

  const handleScoreChange = (index, player) => (e) => {
    const newScores = [...(player === 'player1' ? team1Scores : team2Scores)];
    newScores[index] = parseInt(e.target.value) || 0;
    if (player === 'player1') {
      setTeam1Scores(newScores);
    } else {
      setTeam2Scores(newScores);
    }
  };

  return (
    <div className="scorecard-container">
      <table className="scorecard-table">
        <thead>
          <tr>
            <th>Team</th>
            <th>Set 1</th>
            <th>Set 2</th>
            <th>Set 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{matchData.team1}</td>
            {team1Scores.map((score, index) => (
              <td key={index}>
                {lock ? score : <input
                  type="text"
                  value={score || ''}
                  onChange={handleScoreChange(index, 'player1')}
                />}
              </td>
            ))}
          </tr>
          <tr>
            <td>{matchData.team2}</td>
            {team2Scores.map((score, index) => (
              <td key={index}>
                {lock ? score : <input
                  type="text"
                  value={score || ''}
                  onChange={handleScoreChange(index, 'player2')}
                />}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {lock ? <></> : <div>
        <button onClick={
          () => {
            console.log(matchData.id);
            const docRef = doc(db, "fixtures/Volleyball/boys", matchData.id);
            updateDoc(docRef, {
              set1: {
                team1: team1Scores[0],
                team2: team2Scores[0]
              },
              set2: {
                team1: team1Scores[1],
                team2: team2Scores[1]
              },
              set3: {
                team1: team1Scores[2],
                team2: team2Scores[2]
              },
            }).then(() => {
              // ADD SUCCESS TOAST HERE
              toast.success("Document successfully updated!");
              console.log("Document successfully updated!");
            }).catch((error) => {
              // ADD FAILURE TOAST HERE
              toast.error("Error updating document!");
              console.error("Error updating document: ", error);
            });
          }
        }>Update</button>
        <button onClick={
          () => {
            console.log(matchData.id);
            const docRef = doc(db, "fixtures/Volleyball/boys", matchData.id);
            updateDoc(docRef, {
              set1: {
                team1: team1Scores[0],
                team2: team2Scores[0]
              },
              set2: {
                team1: team1Scores[1],
                team2: team2Scores[1]
              },
              set3: {
                team1: team1Scores[2],
                team2: team2Scores[2]
              },
              locked: true
            }).then(() => {
              // ADD SUCCESS TOAST HERE
              console.log("Document successfully updated!");
              setLock(true);
            }).catch((error) => {
              // ADD FAILURE TOAST HERE
              console.error("Error updating document: ", error);
            });
          }
        }>Update and Lock</button>
      </div>}
      <ToastContainer />
    </div>
  );
};

export default Volleyball;
