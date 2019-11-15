import { singleFetchRequest } from '../helpers/fetch_requests'

export const SET_GENERAL_STATE = 'SET_GENERAL_STATE'
export const SET_TEST_DATA = 'SET_TEST_DATA'
export const REQUEST_INIT_DATA = 'REQUEST_INIT_DATA'
export const GET_INIT_DATA = 'GET_INIT_DATA'
export const GET_INIT_DATA_FAIL = 'GET_INIT_DATA_FAIL'
export const CLEAR_STATE = 'CLEAR_STATE'
export const START_TEST = 'START_TEST'
export const REQUEST_ANSVER_DATA = 'REQUEST_ANSVER_DATA'
export const GET_ANSVER_DATA = 'GET_ANSVER_DATA'
export const GET_ANSVER_DATA_FAIL = 'GET_ANSVER_DATA_FAIL'
export const SET_UNFILLED_FELDS = 'SET_UNFILLED_FELDS'


const setGeneralData = (res) => {
  return {
    type: SET_GENERAL_STATE,
    payload: res
  }
}

const setTestData = (res) => {
  return {
    type: SET_TEST_DATA,
    payload: res
  }
};

const requInitData = () => {
  return {
    type: REQUEST_INIT_DATA
  }
}

const getData = (obj, stateObj) => {
  return {
    type: GET_INIT_DATA,
    payload: [obj, stateObj]
  }
}

const getInitDataFail = () => {
  return {
    type: GET_INIT_DATA_FAIL
  }
}

const requAnsverData = () => {
  return {
    type: REQUEST_ANSVER_DATA
  }
}

const ansverDataGet = (obj, stateObj) => {
  return {
    type: GET_ANSVER_DATA,
    payload: obj
  }
}

const getAnsverDataFail = () => {
  return {
    type: GET_ANSVER_DATA_FAIL
  }
}

const stateClear = () => {
  return {
    type: CLEAR_STATE
  }
}

const setUnfilletFelds = (res) => {
  return {
    type: SET_UNFILLED_FELDS,
    payload: res
  }
};

export const restartStartTest = () => {
  return {
    type: START_TEST
  }
};

export function setFormList(targ, val, g) {
  return (dispatch, getState) => {
    let state = getState().formState;
    if (g) {
      let res = { ...state, [targ]: val };
      dispatch(setGeneralData(res))
    } else {
      let res = { ...state.stateData, [targ]: val };
      dispatch(setTestData(res))
    }
  }
}

export function clearState() {
  return (dispatch) => {
    dispatch(stateClear())
    setTimeout(() => dispatch(stateClear()), 500)
  }
}

export function getInitialData(url) {
  return (dispatch) => {
    dispatch(requInitData());
    singleFetchRequest(url).then((obj) => {
      let stateObj = {};
      obj.map((i) => { stateObj[i.name] = i.defVal })
      dispatch(getData(obj, stateObj));
    })
    .catch(reject => {
      console.log('fail to load' + reject);
      dispatch(getInitDataFail());
    });
  };
}

export function getAnsverData(url) {
  return (dispatch, getState) => {
    
    let findEmptyFelds = () => {
    let stateData = getState().formState.stateData;
    let unfilledFelds = Object.keys(stateData).filter((i) => {
      if ((Array.isArray(stateData[i]) && stateData[i].length < 1) ||
      (	typeof(stateData[i]) === "string" && stateData[i].split('').length < 1) ) return i
    })
    return unfilledFelds
  }

  let resEmptyFelds = findEmptyFelds()
    if (resEmptyFelds.length > 0) {
    dispatch(setUnfilletFelds(resEmptyFelds))
  } else {
    dispatch(requAnsverData());
    singleFetchRequest(url).then((obj) => {
      dispatch(ansverDataGet(obj));
    })
    .catch(reject => {
      console.log('fail to load' + reject);
      dispatch(getAnsverDataFail());
    });
  }
  };
}