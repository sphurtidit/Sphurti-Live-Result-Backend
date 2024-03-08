// import {useState} from 'react';
// import './Cricket.css';

// const Cricket = ({ teamName1, teamName2, tossWinner, tossChoice, scoreTeam1, scoreTeam2, wicketsTeam1, wicketsTeam2 }) => {
// //   const [scoreTeam1, setScoreTeam1] = useState(0);
// //   const [scoreTeam2, setScoreTeam2] = useState(0);

//   return (
//     <div className="scorecard">
//       <h2 className="toss-statement">{tossWinner} has won the toss and will {tossChoice} first</h2>
//       <div className="team-score">
//         <div className="team-name">
//           <h2>{teamName1}</h2>
//         </div>
//         <input type="text" value={scoreTeam1} onChange={(e) => scoreTeam1 = e.target.value} /> / <input type="text" value={wicketsTeam1} onChange={(e) => wicketsTeam1 = e.target.value} />
//       </div>
//       <div className="team-score">
//         <div className="team-name">
//           <h2>{teamName2}</h2>
//         </div>
//         <input type="text" value={scoreTeam2} onChange={(e) => scoreTeam2 = e.target.value} /> / <input type="text" value={wicketsTeam2} onChange={(e) => wicketsTeam2 = e.target.value} />
//       </div>
//     </div>
//   );
// };

// export default Cricket;

import React from 'react';
import './Cricket.css';

const Cricket = ({ teamName1, teamName2 }) => {
  const [scoreTeam1, setScoreTeam1] = React.useState(0);
  const [wicketsTeam1, setWicketsTeam1] = React.useState(0);
  const [scoreTeam2, setScoreTeam2] = React.useState(0);
  const [wicketsTeam2, setWicketsTeam2] = React.useState(0);
  const [tossWinner, setTossWinner] = React.useState('');
  const [tossChoice, setTossChoice] = React.useState('');
  const [oversTeam1, setOversTeam1] = React.useState(0);
  const [oversTeam2, setOversTeam2] = React.useState(0);

//   const handleTossWinnerChange = (event) => {
//     setTossWinner(event.target.value);
//   };

//   const handleTossChoiceChange = (event) => {
//     setTossChoice(event.target.value);
//   };
const handleTossChoiceChange = (event) => {
    setTossChoice(event.target.value);
    if (event.target.value === '1st innings') {
      setTeamNames({ teamName1: tossWinner, teamName2 });
    } else {
      setTeamNames({ teamName1, teamName2: tossWinner });
    }
  };

  const [teamNames, setTeamNames] = React.useState({ teamName1, teamName2 });

  return (
    <div className="scorecard">
      <h2 className="toss-statement">
        {tossWinner} has won the toss and will {tossChoice} first
      </h2>
      <div className="team-score">
        <div className="team-name">
          <h2>{teamNames.teamName1}</h2>
        </div>
        <input type="text" value={scoreTeam1} onChange={(e) => setScoreTeam1(e.target.value)} /> / <input type="text" value={wicketsTeam1} onChange={(e) => setWicketsTeam1(e.target.value)} />
        <input type="text" value={oversTeam1} onChange={(e) => setOversTeam1(e.target.value)} />
      </div>
      <div className="team-score">
        <div className="team-name">
          <h2>{teamNames.teamName2}</h2>
        </div>
        <input type="text" value={scoreTeam2} onChange={(e) => setScoreTeam2(e.target.value)} /> / <input type="text" value={wicketsTeam2} onChange={(e) => setWicketsTeam2(e.target.value)} />
        <input type="text" value={oversTeam2} onChange={(e) => setOversTeam2(e.target.value)} />
      </div>
      <div className="toss-selection">
        <label htmlFor="tossWinner">Toss winner:</label>
        <select id="tossWinner" value={tossWinner}  onChange={(event) => setTossWinner(event.target.value)}>
          <option value={teamName1}>{teamName1}</option>
          <option value={teamName2}>{teamName2}</option>
        </select>
        <label htmlFor="tossChoice">Toss choice:</label>
        <select id="tossChoice" value={tossChoice} onChange={handleTossChoiceChange}>
          <option value="">Select a choice</option>
          <option value="bat">Bat</option>
          <option value="bowl">Bowl</option>
        </select>
      </div>
    </div>
  );
};

export default Cricket;