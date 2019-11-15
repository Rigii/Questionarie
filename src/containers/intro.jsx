import React from 'react';
import { connect } from 'react-redux';
import {
  restartStartTest
} from '../actions/form_actions';

function Intro(props) {
  return (
    !props.startTest ?
      <div className='intro'>
          <h2>Metal Goads</h2>
          <button
          type='button'
          className='button start_button'
          onClick={props.restartStartTest}
          >GO!</button>
      </div> 
      : null)
    
};

const mapStateToProps = store => {
  return {
    startTest: store.formState.startTest
  };
};

const mapDispatchToProps = dispatch => {
return {
  restartStartTest: () => dispatch(restartStartTest())
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
