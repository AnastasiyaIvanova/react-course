import { combineReducers } from "redux";
import block from "./block";
import gift from "./gift";

const rootReducer = combineReducers({ block, gift });

export default rootReducer;