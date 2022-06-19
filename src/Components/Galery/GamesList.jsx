import React , {useState , useEffect} from 'react';
import {useDispatch , useSelector} from'react-redux';

const GamesList = () => {

    const dispatch = useDispatch()
    const state = useSelector( state => state)
    const cash = useSelector( state => state.cash)
    const game = useSelector( state => state.game)
    // const games = useSelector( state => state.games)
    const addGameValue = (e)=>{
        dispatch({type:"ADD_GAME_VALUE" , payload: e.target.value});
  
    }
    // const addCash = (cash)=>{
    //     dispatch({type:"ADD_CASH" , payload: cash});
    // }
    const addGame = ()=>{
        dispatch({type:"ADD_GAME" , game: game});
    }
  return (
    <div className="GaleryList">
        <div >
            <input type="text" onChange={(e)=>addGameValue(e)}/>
            {/* <button onClick={()=>addCash(prompt())}>cash</button> */}
            {/* <button onClick={()=>console.log(game)}>game</button> */}
            <button onClick={()=>console.log(game)}>game</button>
            <button onClick={()=>console.log(state)}>state</button>
            <button onClick={()=>addGame()}>addgGame</button>
 
        </div>
        <ul>
            <li>{cash}</li>
        </ul>
    </div>
  )
}

export default GamesList
