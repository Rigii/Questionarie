import React from 'react'

function RadioComp (props) {
  let {data, i, id } = props;
  let name = data.name;
  
    //let checkId = i.slug
   // let isChecked = props.checkState.indexOf(+i.id) !== -1;
    return (
        <div className="form-radio">
        <label className="container_radio">{i}
          <input
            id={+id}
            name={name}
            type='radio'
            value={i}
            onChange={() => props.setFormList(name, i)}
            checked={props.itemState.indexOf(i) !== -1}
          />
          <span className="checkmark_radio"></span>
        </label>
      </div>
    );
};

export default RadioComp;
