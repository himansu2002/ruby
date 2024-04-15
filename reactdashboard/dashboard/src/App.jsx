import React from 'react'
import Landingpage from './vendordashboard/pages/Landingpage'
import {Routes , Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
      </Routes>
 
    
    </div>

  )
}

export default App
