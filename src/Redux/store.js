import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const middleWare = applyMiddleware(thunk);

const store = createStore(rootReducer, middleWare);

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
});

export default store;