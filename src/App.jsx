import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Volleyball from './components/Volleyball/Volleyball'
import Table_Tennis from './components/Table_Tennis/Table_Tennis'
import { getDocs, collection} from 'firebase/firestore';
import { db } from './firebase';
import MatchList from './components/list/list';

import Cricket from './components/Cricket/Cricket'
import Badminton from './components/Badminton/Badminton'
import Basketball from './components/Basketball/Basketball'
import Football from './components/Football/Football'

function App() {
  const [loading, setLoading] = useState(true);
  const [football, setFootball] = useState();
  const [volleyball, setVolleyball] = useState();
  const [basketballBoys, setBasketballBoys] = useState();
  const [basketballGirls, setBasketballGirls] = useState();
  const [tableTennisBoys, setTableTennisBoys] = useState();
  const [tableTennisMixed, setTableMixed] = useState();
  const [bdBoy, setBdBoy] = useState();
  const [bdGirl, setBdGirl] = useState();
  const [cricket, setCricket] = useState();


  useEffect(() => {

    getDocs(collection(db, "fixtures/Volleyball/boys")).then((querySnapshot) => {
      const temp = querySnapshot.docs.map((doc) => doc.data());
      temp.sort((a, b) => a.order - b.order);
      console.log(temp);
      setVolleyball(temp);
    });

    getDocs(collection(db, "fixtures/Footbatt/boys")).then((querySnapshot) => {
      const temp = querySnapshot.docs.map((doc) => doc.data());
      temp.sort((a, b) => a.order - b.order);
      console.log(temp);
      setFootball(temp);
    }).then(() => {
      getDocs(collection(db, "fixtures/Table Tennis/boys")).then((querySnapshot) => {
        const temp = querySnapshot.docs.map((doc) => doc.data());
        temp.sort((a, b) => a.order - b.order);
        console.log(temp);
        setTableTennisBoys(temp);
      });
    }).then(() => {
      getDocs(collection(db, "fixtures/Table Tennis/mixed")).then((querySnapshot) => {
        const temp = querySnapshot.docs.map((doc) => doc.data());
        temp.sort((a, b) => a.order - b.order);
        console.log(temp);
        setTableMixed(temp);
      });
    }).then(() => {
      getDocs(collection(db, "fixtures/badminton/boys")).then((querySnapshot) => {
        const temp = querySnapshot.docs.map((doc) => doc.data());
        temp.sort((a, b) => a.order - b.order);
        console.log(temp);
        setBdBoy(temp);
      });
    }).then(() => {
      getDocs(collection(db, "fixtures/badminton/girls")).then((querySnapshot) => {
        const temp = querySnapshot.docs.map((doc) => doc.data());
        temp.sort((a, b) => a.order - b.order);
        console.log(temp);
        setBdGirl(temp);
      });
    }).then(() => {
      getDocs(collection(db, "fixtures/basketball/boys")).then((querySnapshot) => {
        const temp = querySnapshot.docs.map((doc) => doc.data());
        temp.sort((a, b) => a.order - b.order);
        console.log(temp);
        setBasketballBoys(temp);
      });
    }).then(() => {
      getDocs(collection(db, "fixtures/basketball/girls")).then((querySnapshot) => {
        const temp = querySnapshot.docs.map((doc) => doc.data());
        temp.sort((a, b) => a.order - b.order);
        console.log(temp);
        setBasketballGirls(temp);
      });
    }).then(() => {
      setLoading(false);
    console.log('done');
    });
    return () => {}
  }, []);

  //Table Tennis
  const [count, setCount] = useState(0);
  const boysPlayer1Name = "RD";
  const boysPlayer2Name = "Rudra";
  const mixedPlayer1Name = "djkshdjk";
  const mixedPlayer2Name = "yuhbg";

  //Cricket
  const teamName1 = 'Team A';
  const teamName2 = 'Team B';
  const tossWinner = 'Team A';
  const tossChoice = 'bat';
  const scoreTeam1 = '149';
  const scoreTeam2 = '120';
  const wicketsTeam1 = '6';
  const wicketsTeam2 = '8';

  //Basketball
  const teamAName = 'Team A';
  const teamBName = 'Team B';

  //Football
  const teamA = 'Team C';
  const teamB = 'Team D';


  return (
    <>
      <div className="background-container">
        {loading ? <div className='loading'>
        <h1>Loading...</h1>
        </div> : 
        <>
          <Navbar />
          <MatchList list={football} />
        </>
        }
        <Navbar />
        <Volleyball/>
        <Table_Tennis boy1Name={boysPlayer1Name} boy2Name={boysPlayer2Name} mixed1Name={mixedPlayer1Name} mixed2Name={mixedPlayer2Name}/>
        <Badminton />
        <Cricket 
         teamName1={teamName1}
         teamName2={teamName2}
         tossWinner={tossWinner}
         tossChoice={tossChoice}
         scoreTeam1={scoreTeam1}
         scoreTeam2={scoreTeam2}
         wicketsTeam1={wicketsTeam1}
         wicketsTeam2={wicketsTeam2}/>
         <Basketball teamAName={teamAName} teamBName={teamBName}/>
         <Football teamA={teamA} teamB={teamB}/>
      </div>
    </>
  )
}

export default App
