import { useState } from 'react';
import './Cricket.css';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Cricket = ({ matchData }) => {
  const docRef = doc(db, `fixtures/Cricket/boys`, matchData.id);
  const [lock, setLock] = useState(matchData.locked);
  const [tossdecided, setTossDecided] = useState(matchData.toss != '' && matchData.choose != '' ? true : false);
  const [scoreTeam1, setScoreTeam1] = useState(matchData.team1Score);
  const [wicketsTeam1, setWicketsTeam1] = useState(matchData.team1Wicket);
  const [scoreTeam2, setScoreTeam2] = useState(matchData.team2Score);
  const [wicketsTeam2, setWicketsTeam2] = useState(matchData.team2Wicket);
  const [tossWinner, setTossWinner] = useState(matchData.toss);
  const [tossChoice, setTossChoice] = useState(matchData.choose);
  const [oversTeam1, setOversTeam1] = useState(matchData.team1Over);
  const [oversTeam2, setOversTeam2] = useState(matchData.team2Over);
  const [firstInningsComplete, setFirstInningsComplete] = useState(matchData.firstInningComplete);

  const handleTossChoiceChange = (event) => {
    setTossChoice(event.target.value);
  };

  return (
    <div className='cricket-component'>
      {tossdecided ? <div className="toss-statement">
        {`${tossWinner} has won the toss and chose to ${tossChoice} first`}
      </div> : <div className="toss-main-container">
        <div className="toss-left">
          <div className="toss">
            <h3>Select Toss winner</h3>
            <select id="tossWinner" value={tossWinner} onChange={(event) => setTossWinner(event.target.value)}>
              <option value="">Select a choice</option>
              <option value={matchData.team1}>{matchData.team1}</option>
              <option value={matchData.team2}>{matchData.team2}</option>
            </select>
          </div>
        </div>
        <div className="toss-right">
          <div className="toss">
            <h3>Select Toss choice</h3>
            <select id="tossChoice" value={tossChoice} onChange={handleTossChoiceChange}>
              <option value="">Select a choice</option>
              <option value="bat">Bat</option>
              <option value="bowl">Bowl</option>
            </select>
          </div>
        </div>
      </div>}
      {tossdecided ? <></> : <button onClick={() => {
        console.log(tossWinner);
        console.log(tossChoice);
        updateDoc(docRef, {
          toss: tossWinner,
          choose: tossChoice
        }).then(() => {
          toast.success("Toss updated!");
          setTossDecided(true);
          console.log("Document successfully updated!");
        }).catch((error) => {
          toast.error("Error updating document!");
          console.error("Error updating document: ", error);
        });
      }}>Submit</button>}

      <div className="score-section">
      <div className="team-score">
        <div className="cricket-team-name">
          <h2>{matchData.team1}</h2>
        </div>
        <div className="input-cricket-field">
        <div>Runs</div>{lock ? <div>{scoreTeam1}</div> : <input type="text" value={scoreTeam1} onChange={(e) => setScoreTeam1(e.target.value)} />}
        </div>
        <div className="input-cricket-field">
        <div>Wickets</div>{lock ? <div>{wicketsTeam1}</div> : <input type="text" value={wicketsTeam1} onChange={(e) => setWicketsTeam1(e.target.value)} />}
        </div>
        <div className="input-cricket-field">
        <div>Overs</div>{lock ? <div>{oversTeam1}</div> : <input type="text" value={oversTeam1} onChange={(e) => setOversTeam1(e.target.value)} />}
        </div>
      </div>
      <div className="team-score">
        <div className="cricket-team-name">
          <h2>{matchData.team2}</h2>
        </div>
        <div className="input-cricket-field">
        <div>Runs</div>{lock ? <div>{scoreTeam1}</div> : <input type="text" value={scoreTeam2} onChange={(e) => setScoreTeam2(e.target.value)} /> }
        </div>
        <div className="input-cricket-field">
        <div>Wickets</div>{lock ? <div>{scoreTeam1}</div> : <input type="text" value={wicketsTeam2} onChange={(e) => setWicketsTeam2(e.target.value)} />}
        </div>
        <div className="input-cricket-field">
        <div>Overs</div>{lock ? <div>{scoreTeam1}</div> : <input type="text" value={oversTeam2} onChange={(e) => setOversTeam2(e.target.value)} />}
        </div>
      </div>
      </div>
      {lock ? <></> : <div>
      <button id='btn' onClick={
          () => {
            updateDoc(docRef, {
              start: true
            }).then(() => {
              toast.success("Match Started!");
              console.log("Document successfully updated!");
            }).catch((error) => {
              toast.error("Error updating document!");
              console.error("Error updating document: ", error);
            });
          }
        }>Start Match</button>
      <button id='btn' onClick={
          () => {
            updateDoc(docRef, {
              team1Score: scoreTeam1,
              team2Score: scoreTeam2,
              team1Wicket: wicketsTeam1,
              team2Wicket: wicketsTeam2,
              team1Over: oversTeam1,
              team2Over: oversTeam2
            }).then(() => {
              toast.success("First innings updated!");
              console.log("Document successfully updated!");
            }).catch((error) => {
              toast.error("Error updating document!");
              console.error("Error updating document: ", error);
            });            
        
          }
        }>First Innings Complete</button>
        <button id='btn' onClick={
          () => {
            updateDoc(docRef, {
              team1Score: scoreTeam1,
              team2Score: scoreTeam2,
              team1Wicket: wicketsTeam1,
              team2Wicket: wicketsTeam2,
              team1Over: oversTeam1,
              team2Over: oversTeam2,
              firstInningComplete: true
            }).then(() => {
              toast.success("Score successfully updated!");
              console.log("Document successfully updated!");
            }).catch((error) => {
              toast.error("Error updating document!");
              console.error("Error updating document: ", error);
            });
          }
        }>Update</button>
        <button id='btn' onClick={
          () => {
            updateDoc(docRef, {
              team1Score: scoreTeam1,
              team2Score: scoreTeam2,
              team1Wicket: wicketsTeam1,
              team2Wicket: wicketsTeam2,
              team1Over: oversTeam1,
              team2Over: oversTeam2,
              locked: true
            }).then(() => {
              toast.success("Match finished!");
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
    // <div className="scorecard">
    //   <h2 className="toss-statement">
    //     {tossWinner} has won the toss and will {tossChoice} first
    //   </h2>
    //   <div className="team-score">
    //     <div className="team-name">
    //       <h2>{matchData.team2}</h2>
    //     </div>
    //     <input type="text" value={scoreTeam2} onChange={(e) => setScoreTeam2(e.target.value)} /> / <input type="text" value={wicketsTeam2} onChange={(e) => setWicketsTeam2(e.target.value)} />
    //     <input type="text" value={oversTeam2} onChange={(e) => setOversTeam2(e.target.value)} />
    //   </div>
    //   <div className="toss-selection">
    //     <label htmlFor="tossWinner">Toss winner:</label>
    //     <select id="tossWinner" value={tossWinner}  onChange={(event) => setTossWinner(event.target.value)}>
    //       <option value={teamName1}>{teamName1}</option>
    //       <option value={teamName2}>{teamName2}</option>
    //     </select>
    //     <label htmlFor="tossChoice">Toss choice:</label>
    //     <select id="tossChoice" value={tossChoice} onChange={handleTossChoiceChange}>
    //       <option value="">Select a choice</option>
    //       <option value="bat">Bat</option>
    //       <option value="bowl">Bowl</option>
    //     </select>
    //   </div>
    // </div>
  );
};

export default Cricket;