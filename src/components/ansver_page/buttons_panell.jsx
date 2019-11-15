import React from 'react'

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
          name='try_again'
        >try again</button>
        
        {/*<button
          type='button'
          id='delete'
          className='button button--second'
         // onClick={() => props.clearState()}
          name='save_result'
          style={{ position: 'inherit', float: 'left' }}
        //disabled={!isPostActive}
        >'save result to compeare'</button>*/}
      </div>
    </div>
  );
}

export default ButtonsPanell;
