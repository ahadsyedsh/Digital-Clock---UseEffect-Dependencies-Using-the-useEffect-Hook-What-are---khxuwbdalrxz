import React, { useState } from 'react'
import DateAndTime from './DateAndTime';
import '../styles/App.css';
const App = () => {
 
  return (
    <div id="main">
      <div className="date-time">
        <DateAndTime />
      </div>
    </div>
  )
}


export default App;
