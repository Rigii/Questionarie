import React from 'react'

function ButtonsPanell(props) {
  let url = `http://localhost:3000/${props.urlName}_ansvers`
  return (
    <div id="post_preview_buttons">
      <hr className='dividing-line' />
      <div className='button_post_panell'>
        <button
          type='button'
          id='publish'
          className='button'
           onClick={() => props.getAnsverData(url)}
          name='publish'
        //disabled={!isPostActive}
        >wach result</button>
        <button
          type='button'
          id='delete'
          className='button button--second'
          onClick={() => props.clearState()}
          name='delete_lot'
          style={{ position: 'inherit', float: 'left' }}
        //disabled={!isPostActive}
        >clear felds</button>
      </div>
    </div>
  );
}

export default ButtonsPanell;
