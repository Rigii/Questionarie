
import { createStore, applyMiddleware } from 'redux'
import {  composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/index.jsx'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const persistedState = localStorage.getItem('metalGods') ? JSON.parse(localStorage.getItem('metalGods')) : {}

export const store = createStore(rootReducer,
    persistedState, 
    composeWithDevTools(applyMiddleware(thunk, logger)));

store.subscribe(()=>{
    localStorage.setItem('metalGods', JSON.stringify(store.getState()))
  })