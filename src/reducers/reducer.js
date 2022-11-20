import { combineReducers } from 'redux';
import loadReducer from "./loadReducer";

// 모든 reducer를 combine하는 함수
export default combineReducers({
    loadReducer
});