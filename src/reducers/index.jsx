import { combineReducers } from 'redux';
import { formState } from './form_reducer.ts';

export const rootReducer = combineReducers({
  formState: formState
})