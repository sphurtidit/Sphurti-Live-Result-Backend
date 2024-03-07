import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Volleyball from './components/Volleyball/Volleyball'
import Table_Tennis from './components/Table_Tennis/Table_Tennis'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="background-container">
        <Navbar />
        <Volleyball/>
        {/* <Table_Tennis /> */}
      </div>
    </>
  )
}

export default App
