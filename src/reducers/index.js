import { combineReducers } from "redux";


import ResultReducer from  'reducers/ResultReducer'

const reducers = {
    results : new ResultReducer().reducer
}

export default combineReducers(reducers);
