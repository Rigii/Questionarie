
import { createStore, applyMiddleware } from 'redux'
import {  composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/index.jsx'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const persistedState = localStorage.getItem('metalGoads') ? JSON.parse(localStorage.getItem('metalGoads')) : {}

export const store = createStore(rootReducer,
    persistedState, 
    composeWithDevTools(applyMiddleware(thunk, logger)));

store.subscribe(()=>{
    localStorage.setItem('metalGoads', JSON.stringify(store.getState()))
  })