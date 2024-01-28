import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Admin from './Pages/Admin/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
        <Router>
            <Navbar/>
            <Admin/>
        
        </Router>
     </>
  )
}

export default App
