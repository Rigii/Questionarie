import React from 'react'
import PropTypes from 'prop-types'

function ButtonsPanell(props) {

  return (
    <div id="post_preview_buttons">
      <hr className='dividing-line' />
      <div className='button_post_panell'>
        <button
          type='button'
          id='try_again'
          className='button'
          onClick={props.restartStartTest}
          name='try_again'>try again</button>
      </div>
    </div>
  );
}

ButtonsPanell.defaultProps = {
  restartStartTest: () => {}
};

ButtonsPanell.propTypes = {
  restartStartTest: PropTypes.func
};

export default ButtonsPanell;
