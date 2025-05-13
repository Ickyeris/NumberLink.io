import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import GamePage from './pages/GamePage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/navbar/navbar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className='w-screen h-screen bg-white flex flex-col'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/not-found' element={<NotFoundPage/>}/>
          <Route path='/game/:difficulty/:size' element={<GamePage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
