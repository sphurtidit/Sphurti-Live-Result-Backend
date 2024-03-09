import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Volleyball from './components/Volleyball/Volleyball'
import Table_Tennis from './components/Table_Tennis/Table_Tennis'
import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';
import MatchList from './components/list/list';
import { set } from 'firebase/database'

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
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);


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
      setList(volleyball);
      console.log('done');
    });
    return () => { }
  }, []);

  return (
    <>
      <div className="background-container">
        {loading ? <div className='loading'>
          <h1>Loading...</h1>
        </div> :
          <>
            <div className="navbar">
              <ul>
                <li><button onClick={() => {
                  setList(volleyball)
                  setIndex(0)
                }}>VolleyBall</button></li>
                <li><button onClick={() => {
                  setList(football)
                  setIndex(1)
                }}>Football</button></li>
                <li><button onClick={() => {
                  setList(basketballBoys)
                  setIndex(2)
                }}>Basketball</button></li>
                <li><button onClick={() => {
                  setList(tableTennisBoys)
                  setIndex(3)
                }}>Table Tennis</button></li>
                <li><button onClick={() => {
                  setList(bdBoy)
                  setIndex(4)
                }}>Badminton</button></li>
                <li><button onClick={() => {
                  setList(tableTennisMixed)
                  setIndex(5)
                }}>Cricket</button></li>
              </ul>
            </div>
            <MatchList list={list} />
          </>
        }
      </div>
    </>
  )
}

export default App;
