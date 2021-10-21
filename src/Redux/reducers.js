import { combineReducers } from "redux";

import { ADD_EXAMPLE_ACTION, DELETE_LAST_NUMBER_ACTION } from "./actions";

const numberReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_EXAMPLE_ACTION:
            state.push(action.number);
            return state;
        case DELETE_LAST_NUMBER_ACTION:
            const newState = state.filter((item, index) => index !== state.length -1);
            return newState;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    number: numberReducer
});

/*
    Or

    const rootReducer = (state = {}, action) {
        return {
            number: numberReducer(state.number, action)
        }
    }

*/
export default rootReducer;