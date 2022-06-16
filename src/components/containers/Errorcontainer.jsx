import React from 'react'
import { NavLink } from 'react-router-dom';

const Errorcontainer = () => {
  return (
    <div>
      <h1>ERROR</h1>
      <NavLink to='/GamesContainer'>Back</NavLink>
    </div>
  )
}

export default Errorcontainer
