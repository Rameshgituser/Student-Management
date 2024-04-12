import { createStore } from 'react-redux';

import accessStudentReducer from '../reducers/studentreducer';


const rootReducer = combineReducers({
  mystudent:accessStudentReducer,

})


    

export  default rootReducer;