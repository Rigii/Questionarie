import React, { Component } from 'react'
import Select from './select'

class SelectComp extends Component {

    componentDidUpdate(nextProps) {
        if (this.props.isClear && this.props.isClear !== nextProps.isClear) {
            this.props.setFormList(this.props.data.name, '')
        }
    }

    alertMess(name, itemState) {
        return this.props.unfilledFelds.indexOf(name) !== -1 && itemState.split('').length < 1 ?
            <small className='validate-mess'>select one</small> : null
    }

    render() {
        let { data, setFormList, itemState } = this.props;
        let width = data.itemsOnStr > 1 ? (100/data.itemsOnStr - 0.5) + '%' : '100%'
        
        return (
            <div id='div-select' className="div_select input_group" style={{minWidth: width}}>
                <span className="input-title">{data.title}</span>
                <Select
                    data={data.values}
                    isPost={false}
                    isEdit={false}
                    value={itemState}
                    setFormList={setFormList}
                    name={data.name}
                    valueDefNameInObj={'name'} // name of value element in data obj in arr
                    defOptName={data.placeholder}
                    //emptyValOpt={!this.props.isSale ?  this.gettext('Любой регион') : null}
                    shouldValidate={false}
                    //multi //isMulti
                    //maxCount={6} //for multiselect
                />
                {this.alertMess(data.name, itemState)}
            </div>
        );
    }
};

export default SelectComp;
