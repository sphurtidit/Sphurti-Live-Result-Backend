import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Volleyball from './components/Volleyball/Volleyball'
import Table_Tennis from './components/Table_Tennis/Table_Tennis'
import { getDocs, collection, getDoc, doc, query } from 'firebase/firestore';
import { db } from './firebase';

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

    const volleyFix = getDocs(collection(db, "fixtures/Volleyball/boys")).then((querySnapshot) => {
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
    });
    getDocs(collection(db, "fixtures/Table Tennis/boys")).then((querySnapshot) => {
      const temp = querySnapshot.docs.map((doc) => doc.data());
      temp.sort((a, b) => a.order - b.order);
      console.log(temp);
      setTableTennisBoys(temp);
    });
    getDocs(collection(db, "fixtures/Table Tennis/mixed")).then((querySnapshot) => {
      const temp = querySnapshot.docs.map((doc) => doc.data());
      temp.sort((a, b) => a.order - b.order);
      console.log(temp);
      setTableMixed(temp);
    });
    getDocs(collection(db, "fixtures/badminton/boys")).then((querySnapshot) => {
      const temp = querySnapshot.docs.map((doc) => doc.data());
      temp.sort((a, b) => a.order - b.order);
      console.log(temp);
      setBdBoy(temp);
    });
    getDocs(collection(db, "fixtures/badminton/girls")).then((querySnapshot) => {
      const temp = querySnapshot.docs.map((doc) => doc.data());
      temp.sort((a, b) => a.order - b.order);
      console.log(temp);
      setBdGirl(temp);
    });
    getDocs(collection(db, "fixtures/basketball/boys")).then((querySnapshot) => {
      const temp = querySnapshot.docs.map((doc) => doc.data());
      temp.sort((a, b) => a.order - b.order);
      console.log(temp);
      setBasketballBoys(temp);
    });

    getDocs(collection(db, "fixtures/basketball/girls")).then((querySnapshot) => {
      const temp = querySnapshot.docs.map((doc) => doc.data());
      temp.sort((a, b) => a.order - b.order);
      console.log(temp);
      setBasketballGirls(temp);
    });

    return () => {
      setLoading(false);
    }
  }, []);


  return (
    <>
      <div className="background-container">
        <Navbar />
        <Volleyball />
      </div>
    </>
  )
}

export default App
