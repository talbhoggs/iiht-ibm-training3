import { combineReducers } from "redux";
import video from "./reducers";

const rootReducers = combineReducers({video: video});

export default rootReducers;