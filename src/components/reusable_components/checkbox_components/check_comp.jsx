import React from 'react'
import PropTypes from 'prop-types'

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

CheckComp.defaultProps = {
  setFormList: () => { },
  itemState: [],
  id: '',
  i: '',
  data: {}
};

CheckComp.propTypes = {
  setFormList: PropTypes.func,
  itemState: PropTypes.array,
  id: PropTypes.string,
  i: PropTypes.string,
  data: PropTypes.object
};

export default CheckComp;
