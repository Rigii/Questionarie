import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  restartStartTest
} from '../actions/form_actions';

function Intro(props) {
  return (
    !props.startTest ?
      <div className='intro'>
          <h2>Metal Gods</h2>
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

Intro.defaultProps = {
  restartStartTest: () => { }
};

Intro.propTypes = {
  restartStartTest: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
