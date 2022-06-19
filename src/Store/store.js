import { createStore } from 'redux';

const ADD_GAME = 'ADD_GAME';
const REMOVE_GAME = 'REMOVE_GAME';
const store = createStore(reducer);
function reducer(state, action) {
    switch (action.type) {
        case ADD_GAME: return { value: action.value_1 };
        case REMOVE_GAME: return { value: action.value_2 };

        default: return state;
    }
}
export default store;