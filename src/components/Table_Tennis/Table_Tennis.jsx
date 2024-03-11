import { useState } from "react";
import "./Table_Tennis.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const TableTennis = ({ matchData, type }) => {
  const [lock, setLock] = useState(matchData.locked);
  const isBoys = type === 'boys';
  const [teamAScore, setTeamAScore] = useState([
    matchData.set1['team1'],
    matchData.set2['team1'],
    matchData.set3['team1']]);
  const [teamBScore, setTeamBScore] = useState([
    matchData.set1['team2'],
    matchData.set2['team2'],
    matchData.set3['team2']]);
  const sets = [1, 2, 3];
  if (isBoys) {
    teamAScore.push(matchData.set4['team1']);
    teamAScore.push(matchData.set5['team1']);
    teamBScore.push(matchData.set4['team2']);
    teamBScore.push(matchData.set5['team2']);
    sets.push(4);
    sets.push(5);
  }

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
                sets.map((quarter, index) => (
                  <>
                    <div className="sc-bb-tile">
                      <div className="quarter">{`Set ${quarter}`}</div>
                      {lock ? teamAScore[index] : <input
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
                sets.map((quarter, index) => (
                  <>
                    <div className="sc-bb-tile">
                      <div className="quarter">{`Set ${quarter}`}</div>
                      {lock ? teamBScore[index] : <input
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
            const docRef = doc(db, `fixtures/Table Tennis/${type}`, matchData.id);
            if(isBoys) {
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
                set4: {
                  team1: teamAScore[3],
                  team2: teamBScore[3]
                },
                set5: {
                  team1: teamAScore[4],
                  team2: teamBScore[4]
                }
              }).then(() => {
                toast.success("Document successfully updated!");
                console.log("Document successfully updated!");
              }).catch((error) => {
                toast.error("Error updating document!");
                console.error("Error updating document: ", error);
              });
            } else {
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
                // ADD SUCCESS TOAST HERE
                console.log("Document successfully updated!");
              }).catch((error) => {
                // ADD FAILURE TOAST HERE
                console.error("Error updating document: ", error);
              });
            }
          }
        }>Update</button>
        <button onClick={
          () => {
            const docRef = doc(db, `fixtures/Table Tennis/${type}`, matchData.id);
            if(isBoys) {
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
                set4: {
                  team1: teamAScore[3],
                  team2: teamBScore[3]
                },
                set5: {
                  team1: teamAScore[4],
                  team2: teamBScore[4]
                },
                locked: true
              }).then(() => {
                setLock(true);
                toast.success("Document successfully updated!");
                console.log("Document successfully updated!");
              }).catch((error) => {
                toast.error("Error updating document!");
                console.error("Error updating document: ", error);
              });
            } else {
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
                setLock(true);
                console.log("Document successfully updated!");
              }).catch((error) => {
                toast.error("Error updating document!");
                console.error("Error updating document: ", error);
              });
            }
          }
        }>Update and Lock</button>
      </div>}
      <ToastContainer />
    </div>
  );
};

export default TableTennis;
