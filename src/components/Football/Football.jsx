import {useState} from 'react';
import './Football.css';


const Football = () => {
    const [teamAGoals, setTeamAGoals] = useState(0);
    const [teamBGoals, setTeamBGoals] = useState(0);
    const [teamAEvents, setTeamAEvents] = useState([]);
    const [teamBEvents, setTeamBEvents] = useState([]);
    const [newEvent, setNewEvent] = useState("");
    const [newEventTime, setNewEventTime] = useState("");
    const [addButtonDisabled, setAddButtonDisabled] = useState(true);

    const handleAddGoal = (team) => {
        if (team ==='A') {
            setTeamAGoals(prevGoals => prevGoals + 1);
            setTeamAEvents([...teamAEvents, {player: newEvent, time: newEventTime}]);
        }
        else if (team === 'B') {
            setTeamBGoals(prevGoals => prevGoals +1)
            setTeamBEvents([...teamBEvents, {player: newEvent, time: newEventTime}]);
        }
        setNewEvent("");
        setNewEventTime("");
        setAddButtonDisabled(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "newEvent") {
          setNewEvent(value);
        } else if (name === "newEventTime") {
          setNewEventTime(value);
        }
        setAddButtonDisabled(!(newEvent && newEventTime));
      };

    return (
        <div className="football">
        <div className="teams">
          <h2>Team A</h2>
          <div className="goals">{teamAGoals}</div>
          <div>
            <input
            className="name"
              type="text"
              name="newEvent"
              placeholder="Player Name"
              value={newEvent}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="newEventTime"
              placeholder="Time"
              value={newEventTime}
              onChange={handleInputChange}
            />
            <button onClick={() => handleAddGoal('A')}  disabled={addButtonDisabled}>Add Goal</button>
          </div>
          <div className="events">
            {teamAEvents.map((event, index) => (
              <div key={index}>{`${event.player} (${event.time})`}</div>
            ))}
          </div>
        </div>

        <div className="teams">
            <h2>VS</h2>
        </div>

        <div className="teams">
          <h2>Team B</h2>
          <div className="goals">{teamBGoals}</div>
          <div>
            <input
             className="name"
              type="text"
              name="newEvent"
              placeholder="Player Name"
              value={newEvent}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="newEventTime"
              placeholder="Time"
              value={newEventTime}
              onChange={handleInputChange}
            />
            <button onClick={() => handleAddGoal('B')} disabled={addButtonDisabled}>Add Goal</button>
          </div>
          <div className="events">
            {teamBEvents.map((event, index) => (
              <div key={index}>{`${event.player} (${event.time})`}</div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Football;