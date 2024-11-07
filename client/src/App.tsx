import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import DailiesPage from './pages/DailiesPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className='w-screen h-screen bg-white flex flex-col'>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/not-found' element={<NotFoundPage/>}/>
          <Route path='/dailies/:difficulty/:size' element={<DailiesPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
