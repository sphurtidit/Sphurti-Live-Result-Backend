import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Volleyball from './components/Volleyball/Volleyball'
import Table_Tennis from './components/Table_Tennis/Table_Tennis'

function App() {
  const [count, setCount] = useState(0);
  const boysPlayer1Name = "RD";
  const boysPlayer2Name = "Rudra";
  const girlsPlayer1Name = "djkshdjk";
  const girlsPlayer2Name = "yuhbg";


  return (
    <>
      <div className="background-container">
        <Navbar />
        <Volleyball/>
        <Table_Tennis boy1Name={boysPlayer1Name} boy2Name={boysPlayer2Name} girl1Name={girlsPlayer1Name} girl2Name={girlsPlayer2Name}/>
      </div>
    </>
  )
}

export default App
