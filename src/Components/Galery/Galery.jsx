import React from 'react';
import { Provider } from 'react-redux';

import {createStore} from 'redux';
import GamesList from './GamesList';

const defaultStore = {
  cash : 0,
  game : '',
  games : [],
}


// action={type:"" , payload: ""}
const reducer = (state = defaultStore, action) =>{
  switch(action.type){
    // case "ADD_CASH":
    //   return {...state, cash: state.cash + action.payload}
    case "ADD_GAME_VALUE":{
      return {...state, game: action.payload}
    }
    case "ADD_GAME":{
      return {...state, games: [ ...state.games, action.game]}
    }

    default: return state
  }
}
const store = createStore(reducer);



export const Galery = () => {
  return (
    <Provider store={store}>
      <GamesList />
    </Provider>
  )
}


export default Galery
