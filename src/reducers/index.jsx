import { combineReducers } from 'redux';
import { formState } from './form_reducer.jsx';

export const rootReducer = combineReducers({
  formState: formState
})