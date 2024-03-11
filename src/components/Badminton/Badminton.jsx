import { useState } from "react";
import "./Badminton.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Badminton = ({ matchData, type }) => {
  const [lock, setLock] = useState(matchData.locked);
  const [teamAScore, setTeamAScore] = useState([
    matchData.set1['team1'],
    matchData.set2['team1'],
    matchData.set3['team1']]);
  const [teamBScore, setTeamBScore] = useState([
    matchData.set1['team2'],
    matchData.set2['team2'],
    matchData.set3['team2']]);

  const updateScore = (team, quarter, value) => {
    if (value === '') value = 0;
    else value = parseInt(value);
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

  return (
    <div className="basketball-container">
      <div className="basketball">
        <div className="team">
          <h2>{matchData.team1}</h2>
          <div className='score-container'>
            <div className="scores">
              {
                [1, 2, 3].map((quarter, index) => (
                  <>
                    <div className="sc-bb-tile">
                      <div className="quarter">{`Q${quarter}`}</div>
                      {lock? teamAScore[index] : <input
                        key={index}
                        type="text"
                        value={teamAScore[index]}
                        onChange={(e) =>
                          updateScore("A", quarter, e.target.value)
                        }
                      />}
                    </div>
                  </>
                ))
              }
            </div>
          </div>
        </div>
        <div className="team">
          <h3>VS</h3>
        </div>
        <div className="team">
          <h2>{matchData.team2}</h2>
          <div className='score-container'>
            <div className="scores">
              {
                [1, 2, 3].map((quarter, index) => (
                  <>
                    <div className="sc-bb-tile">
                      <div className="quarter">{`Q${quarter}`}</div>
                      {lock? teamBScore[index] : <input
                        key={index}
                        type="text"
                        value={teamBScore[index]}
                        onChange={(e) =>
                          updateScore("B", quarter, e.target.value)
                        }
                      />}
                    </div>
                  </>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {lock ? <></> : <div>
        <button onClick={
          () => {
            console.log(matchData.team1)
            console.log(matchData.set1['team1'])
            const docRef = doc(db, `fixtures/badminton/${type}`, matchData.id);
            updateDoc(docRef, {
              set1: {
                team1: teamAScore[0],
                team2: teamBScore[0]
              },
              set2: {
                team1: teamAScore[1],
                team2: teamBScore[1]
              },
              set3: {
                team1: teamAScore[2],
                team2: teamBScore[2]
              }
            }).then(() => {
              toast.success("Document successfully updated!");
              console.log("Document successfully updated!");
            }).catch((error) => {
              toast.error("Error updating document!");
              console.error("Error updating document: ", error);
            });
          }
        }>Update</button>
        <button onClick={
          () => {
            const docRef = doc(db, `fixtures/badminton/${type}`, matchData.id);
            updateDoc(docRef, {
              set1: {
                team1: teamAScore[0],
                team2: teamBScore[0]
              },
              set2: {
                team1: teamAScore[1],
                team2: teamBScore[1]
              },
              set3: {
                team1: teamAScore[2],
                team2: teamBScore[2]
              },
              locked: true
            }).then(() => {
              toast.success("Document successfully updated!");
              console.log("Document successfully updated!");
              setLock(true);
            }).catch((error) => {
              toast.error("Error updating document!");
              console.error("Error updating document: ", error);
            });
          }
        }>Update and Lock</button>
      </div>}
      <ToastContainer />
    </div>
  );
};

export default Badminton;
