import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextComp extends Component {

  componentDidUpdate(nextProps) {
    if (this.props.isClear && this.props.isClear !== nextProps.isClear) {
      this.props.setFormList(this.props.data.name, '')
    }
  }

  alertMess(name, itemState) {
    return this.props.unfilledFelds.indexOf(name) !== -1 && itemState.split('').length < 1 ?
      <small className='validate-mess'>fill this feld</small> : null
  }

  render() {
    let { title, id, name, itemsOnStr } = this.props.data;
    let width = itemsOnStr > 1 ? (100/itemsOnStr - 0.5) + '%' : '100%'
    return (
      <div id='text_comp' className='input_group' style={{width: width}}>
          <span className="input-title">{title}</span>
          <input
            id={id}
            type='text'
            name={name}
            value={this.props.itemState}
            onChange={(e) => this.props.setFormList(name, e.target.value)}
            className='form-control'
          />
          {this.alertMess(name, this.props.itemState)}
      </div>
    );
  }
};

TextComp.defaultProps = {
  setFormList: () => { },
  itemState: '',
  data: {},
  isClear: false,
  unfilledFelds: []

};

TextComp.propTypes = {
  setFormList: PropTypes.func,
  itemState: PropTypes.string,
  data: PropTypes.object,
  isClear: PropTypes.bool,
  unfilledFelds: PropTypes.array
};

export default TextComp;
