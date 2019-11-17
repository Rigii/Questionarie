import React from 'react'
import PropTypes from 'prop-types'

function RadioComp(props) {
  let { data, i, id } = props;
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

RadioComp.defaultProps = {
  setFormList: () => { },
  itemState: '',
  id: '',
  i: '',
  data: {}
};

RadioComp.propTypes = {
  setFormList: PropTypes.func,
  itemState: PropTypes.string,
  id: PropTypes.string,
  i: PropTypes.string,
  data: PropTypes.object
};

export default RadioComp;
