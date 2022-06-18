import { createStore } from 'redux';


const initialState = [
    { title: "game", name: 'GTA5', id: 1 },
]
const reducer = (state = initialState, action) => {
    console.log('action');
    return state
}

const store = createStore(reducer);

export default store;