import React, { Component } from 'react'
import RadioComp from './radio_comp'

class RadioComponents extends Component {

  componentDidUpdate(nextProps) {
    if (this.props.isClear && this.props.isClear !== nextProps.isClear) {
      this.props.setFormList(this.props.data.name, '')
    }
  }

  getKey(str) {
    let key = 0;
    for (let i = 0; i < str.length; i++) {
      key += str.charCodeAt(i);
    }
    return key.toString();
  };

  alertMess(name, itemState) {
    return this.props.unfilledFelds.indexOf(name) !== -1 && itemState.split('').length < 1 ?
    <small className='validate-mess'>select one</small> : null
  }

  render() {
    let { setFormList, data, itemState } = this.props;
    let { name, id} = data;
    let width = data.itemsOnStr > 1 ? (100/data.itemsOnStr - 0.5) + '%' : '100%'

    return (
      <div id={id} className='input_group' style={{width}}>
        <div className='radio_cont'>
          <span className="input-title">{data.title}</span>
          {data.values.map((i) => {
            let id = this.getKey(i) + data.id;
            return <RadioComp
              key={+id}
              id={id}
              i={i}
              setFormList={setFormList}
              data={data}
              itemState={itemState}
              checkBoxSetter={this.checkBoxSetter}
            />
          })}
        </div>
        {this.alertMess(name, itemState)}
      </div>
    );
  }
};

export default RadioComponents;

