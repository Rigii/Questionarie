import React, { Component } from 'react'
import CheckComp from './check_comp'

class CheckBoxComp extends Component {
  constructor(){
    super()
    this.checkBoxSetter = this.checkBoxSetter.bind(this)
  }

  componentDidUpdate(nextProps){
    if (this.props.isClear && this.props.isClear !== nextProps.isClear) {
      this.props.setFormList(this.props.data.name, [])
    }
  }

  getKey(str) {
    let key = 0;
    for (let i = 0; i < str.length; i++) {
      key += str.charCodeAt(i);
    }
    return key.toString();
  };

  checkBoxSetter(e, name, i) {
    let arrState = [...this.props.itemState];
    e.target.checked ? arrState.push(i) : arrState.pop(i);
    this.props.setFormList(name, arrState)
    }

  alertMess() {
    return this.props.unfilledFelds.indexOf(this.props.data.name) !== -1 && this.props.itemState.length < 1 ?
    <small className='validate-mess'>select at least one variant</small> : null;
  }

  render (){
  let {setFormList, data, itemState} = this.props;
  let id = data.id;
  let width = data.itemsOnStr > 1 ? (100/data.itemsOnStr - 0.5) + '%' : '100%'

  return (
    <div id={id} className='input_group' style={{width: width}}>
      <div className='checkbox_cont'>
      <span className="input-title">{data.title}</span><br/>
        {data.values.map((i) => {
        let id = this.getKey(i) + data.id;
        return <CheckComp
        key={id}
        id={id}
        i={i}
        setFormList={setFormList}
        data={data}
        itemState={itemState}
        checkBoxSetter={this.checkBoxSetter}
        />
      })}
      
      </div>
      {this.alertMess()}
    </div>
  );
}
};

export default CheckBoxComp;
