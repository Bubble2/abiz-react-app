import { combineReducers } from 'redux-immutable';


import {reducer as demo1Reducer} from '@pages/demo1';

const rootReducer = combineReducers({
    demo1Reducer
});

export default rootReducer
