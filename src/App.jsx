import { useEffect, useState } from "react";
import "./App.css";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";
import MatchList from "./components/list/list";


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
  const [name, setName] = useState("Cricket");

  const navJSON = [
    {
      name: "Cricket",
      data: cricket,
    },
    {
      name: "Football",
      data: football,
    },
    {
      name: "VolleyBall",
      data: volleyball,
    },
    {
      name: "Basketball Boys",
      data: basketballBoys,
    },
    {
      name: "Basketball Girls",
      data: basketballGirls,
    },
    {
      name: "Table Tennis Boys",
      data: tableTennisBoys,
    },
    {
      name: "Table Tennis Mixed",
      data: tableTennisMixed,
    },
    {
      name: "Badminton Boys",
      data: bdBoy,
    },
    {
      name: "Badminton Girls",
      data: bdGirl,
    }
  ];

  useEffect(() => {
    getDocs(collection(db, "fixtures/Volleyball/boys"))
      .then((querySnapshot) => {
        setLoading(true);
        const temp = querySnapshot.docs.map((doc) => {
          // console.log(doc.data);
          return doc.data();
        });
        temp.sort((a, b) => a.order - b.order);
        // console.log(temp);
        setVolleyball(temp);
        
        // console.log(volleyball)

        setLoading(true);
      })
      .then(() => {
        getDocs(collection(db, "fixtures/Footbatt/boys")).then(
          (querySnapshot) => {
            const temp = querySnapshot.docs.map((doc) => doc.data());
            temp.sort((a, b) => a.order - b.order);
            // console.log(temp);
            setFootball(temp);
            setLoading(true);
          }
        );
      })

      .then(() => {
        getDocs(collection(db, "fixtures/Table Tennis/boys")).then(
          (querySnapshot) => {
            const temp = querySnapshot.docs.map((doc) => doc.data());
            temp.sort((a, b) => a.order - b.order);
            // console.log(temp);
            setTableTennisBoys(temp);
            setLoading(true);
          }
        );
      })
      .then(() => {
        getDocs(collection(db, "fixtures/Table Tennis/mixed")).then(
          (querySnapshot) => {
            const temp = querySnapshot.docs.map((doc) => doc.data());
            temp.sort((a, b) => a.order - b.order);
            // console.log(temp);
            setTableMixed(temp);
            setLoading(true);

          }
        );
      })
      .then(() => {
        getDocs(collection(db, "fixtures/badminton/boys")).then(
          (querySnapshot) => {
            const temp = querySnapshot.docs.map((doc) => doc.data());
            temp.sort((a, b) => a.order - b.order);
            // console.log(temp);
            setBdBoy(temp);
            setLoading(true);
          }
        );
      })
      .then(() => {
        getDocs(collection(db, "fixtures/badminton/girls")).then(
          (querySnapshot) => {
            const temp = querySnapshot.docs.map((doc) => doc.data());
            temp.sort((a, b) => a.order - b.order);
            // console.log(temp);
            setBdGirl(temp);
            setLoading(true);
            // console.log(temp[0].id);
          }
        );
      })
      .then(() => {
        getDocs(collection(db, "fixtures/Cricket/boys")).then(
          (querySnapshot) => {
            const temp = querySnapshot.docs.map((doc) => doc.data());
            temp.sort((a, b) => a.order - b.order);
            // console.log(temp);
            setCricket(temp);
            setLoading(true);
            setList(temp);
          }
        );
      })
      .then(() => {
        getDocs(collection(db, "fixtures/basketball/boys")).then(
          (querySnapshot) => {
            const temp = querySnapshot.docs.map((doc) => doc.data());
            temp.sort((a, b) => a.order - b.order);
            // console.log(temp);
            setBasketballBoys(temp);
            setLoading(true);
          }
        );
      })
      .then(() => {
        getDocs(collection(db, "fixtures/basketball/girls"))
          .then((querySnapshot) => {
            const temp = querySnapshot.docs.map((doc) => doc.data());
            temp.sort((a, b) => a.order - b.order);
            // console.log(temp);
            setBasketballGirls(temp);
          })
          .then(() => {
            setLoading(false);
            // console.log("done");
          });
      });
    return () => { };
  }, []);

  return (
    <>
      <div className="background-container">
        {loading ? (
          <div className="loading">
            <h1>Loading...</h1>
          </div>
        ) : (
          <>
            <div className="navbar">
              <ul>
                {
                  navJSON.map((item, i) => {
                    return (
                      <li key={i}>
                        <button
                          onClick={() => {
                            setList(item.data);
                            setIndex(i);
                            setName(item.name);
                          }}>
                          {item.name}
                        </button>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
            <MatchList list={list} sportIndex={index} name={name}/>
          </>
        )}
      </div>
    </>
  );
}

export default App;