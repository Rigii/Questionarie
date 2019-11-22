import {
  GET_INIT_DATA,
  GET_INIT_DATA_FAIL,
  REQUEST_INIT_DATA,
  SET_TEST_DATA,
  CLEAR_STATE,
  START_TEST,
  REQUEST_ANSVER_DATA,
  GET_ANSVER_DATA,
  GET_ANSVER_DATA_FAIL,
  SET_GENERAL_STATE,
  SET_UNFILLED_FELDS
} from '../actions/form_actions'
import { InitialStateTypes } from './reducerTypes'

export const initialState: InitialStateTypes = {
  urlName: '',
  startTest: false,
  stopTest: false,
  renderData: [],
  stateData: {},
  unfilledFelds: [],
  correctAnsvers: [],
  isClear: false,
  isFetching: false
};

export function formState(state = initialState, action: any) {
  let payload = action.payload;
  switch (action.type) {
    case SET_GENERAL_STATE: return payload
    case START_TEST: return { ...state, startTest: !state.startTest, stopTest: false, stateData: {}, urlName: '' }
    case REQUEST_INIT_DATA: return { ...state, isFetching: true, unfilledFelds: [] }
    case GET_INIT_DATA: return { ...state, renderData: payload[0], stateData: payload[1], isFetching: false }
    case GET_INIT_DATA_FAIL: return { ...state, isFetching: false }
    case SET_TEST_DATA: return { ...state, stateData: payload } 
    case CLEAR_STATE: return { ...state, isClear: !state.isClear, unfilledFelds: [] }
    case SET_UNFILLED_FELDS: return { ...state, unfilledFelds: payload }
    case REQUEST_ANSVER_DATA: return { ...state, isFetching: true }
    case GET_ANSVER_DATA: return { ...state, correctAnsvers: payload, isFetching: false, stopTest: true }
    case GET_ANSVER_DATA_FAIL: return { ...state, isFetching: false }
    default:
      return state
  }
}



