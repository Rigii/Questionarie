import React from 'react'

function CheckComp (props) {
  let {data, i, id } = props;
  let name = data.name;
  
    return (
      <div className='form-check'>
        <label className="container">{i}
          <input
            type='checkbox'
            name={name}
            onChange={(e) => props.checkBoxSetter(e, name, i)}
            id={+id}
            value={i}
            checked={props.itemState.indexOf(i) !== -1}
            />
          <span className="checkmark"></span>
        </label>
      </div>
    );
};

export default CheckComp;
