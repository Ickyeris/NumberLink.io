import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/main/main';


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light');

  return (
    <Router>
      <Routes>
        <Route path='/main' element={<MainPage/>}/>

      </Routes>
    </Router>
  )
}

export default App
