import { useState } from 'react';
import './Football.css';
import { db } from '../../firebase';
import 'firebase/firestore';
import { doc, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from 'react-toastify/dist/components';



const Football = ({ matchData }) => {
  const [newGoalA, setNewGoalA] = useState("");
  const [newGoalTimeA, setNewGoalTimeA] = useState("");
  const [addButtonDisabledA, setAddButtonDisabledA] = useState(true);
  const [goal1, setGoal1] = useState(matchData.goalTeam1);


  const [newGoalB, setNewGoalB] = useState("");
  const [newGoalTimeB, setNewGoalTimeB] = useState("");
  const [addButtonDisabledB, setAddButtonDisabledB] = useState(true);
  const [goal2, setGoal2] = useState(matchData.goalTeam2);

  const handleAddGoalA = () => {
    console.log(newGoalA)
    console.log(newGoalTimeA)
    const newGoal = { ...goal1, [newGoalTimeA]: newGoalA };
    setGoal1(newGoal);
    setNewGoalA("");
    setNewGoalTimeA("");
    setAddButtonDisabledA(true);
  };

  const handleAddGoalB = () => {
    console.log(addButtonDisabledB)
    console.log(newGoalB)
    console.log(newGoalTimeB)
    const newGoal = { ...goal2, [newGoalTimeB]: newGoalB };
    console.log(newGoal)
    setGoal2(newGoal);
    setNewGoalB("");
    setNewGoalTimeB("");
    setAddButtonDisabledB(true);
  };

  const handleInputChangeA = (e) => {
    const { name, value } = e.target;
    if (name === "newEvent") {
      setNewGoalA(value);
    } else if (name === "newEventTime") {
      setNewGoalTimeA(value);
    }
    setAddButtonDisabledA(!(newGoalA && newGoalTimeA));
  };

  const handleInputChangeB = (e) => {
    const { name, value } = e.target;
    if (name === "newEvent") {
      setNewGoalB(value);
    } else if (name === "newEventTime") {
      setNewGoalTimeB(value);
    }
    setAddButtonDisabledB(!(newGoalB && newGoalTimeB));
    console.log(addButtonDisabledB)
  };

  return (
    <div className='footballOverAllcontainer'>
      <div className="football">
        <div className="teams">
          <h2>{matchData.team1}</h2>
          <div className="goals">{Object.entries(goal1).length}</div>
          {matchData.locked ? <div className='locked'>Match Locked</div> : <div className='field'>
            <input
              className="name"
              type="text"
              name="newEvent"
              placeholder="Player Name"
              value={newGoalA}
              onChange={handleInputChangeA}
            />
            <input
              type="text"
              name="newEventTime"
              placeholder="Time"
              value={newGoalTimeA}
              onChange={handleInputChangeA}
            />
            <button className="addGoal" onClick={() => handleAddGoalA()} disabled={addButtonDisabledA}>Add Goal</button>
          </div>}
          <div className="events">
            {
              Object.keys(goal1).map((key, value) =>
                <div key={value}>{`${goal1[key]} - ${key}`}</div>)
            }
          </div>
        </div>

        <div className="teams">
          <h2>VS</h2>
        </div>

        <div className="teams">
          <h2>{matchData.team2}</h2>
          <div className="goals">{Object.entries(goal2).length}</div>
          {matchData.locked ? <div className='locked'>Match Locked</div> : <div className='field'>
            <input
              className="name"
              type="text"
              name="newEvent"
              placeholder="Player Name"
              value={newGoalB}
              onChange={handleInputChangeB}
            />
            <input
              type="text"
              name="newEventTime"
              placeholder="Time"
              value={newGoalTimeB}
              onChange={handleInputChangeB}
            />
            <button onClick={() => handleAddGoalB()} disabled={addButtonDisabledB}>Add Goal</button>
          </div>}
          <div className="events">
            {
              Object.keys(goal2).map((key, value) =>
                <div key={value}>{`${goal2[key]} - ${key}`}</div>)
            }
          </div>
        </div>
      </div>
      {matchData.locked ? <></> : <div>
        <button className='update' onClick={
          () => {
            const docRef = doc(db, "fixtures/Footbatt/boys", matchData.id);
            updateDoc(docRef, {
              goalTeam1: goal1,
              goalTeam2: goal2,
            }).then(() => {
              toast.success("Document successfully updated!");
              console.log("Document successfully updated!");
            }).catch((error) => {
              toast.error("Error updating document!");
              console.error("Error updating document: ", error);
            });
          }
        }>Update</button>
        <button className='update' onClick={
          () => {
            const docRef = doc(db, "fixtures/Footbatt/boys", matchData.id);
            updateDoc(docRef, {
              goalTeam1: goal1,
              goalTeam2: goal2,
              locked: true
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
        }>Update and Lock</button>
      </div>}
      <ToastContainer />
    </div>
  );
};

export default Football;