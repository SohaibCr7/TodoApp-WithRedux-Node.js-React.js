import {createStore, combineReducers} from "redux";
import {todos} from "./reducers";

// Here i Get the reducer from reducer file
const reducers = {todos};

const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(rootReducer);

export const store =  configureStore()
