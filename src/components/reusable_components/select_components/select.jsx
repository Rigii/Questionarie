import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
      selectedName: '',
      displayDrop: 'none',
      isBlur: false,
      butStyle: ''
    };
    this.setSelectOpt = this.setSelectOpt.bind(this);
    this.setData = this.setData.bind(this);
    this.showDrop = this.showDrop.bind(this);
    this.setBlur = this.setBlur.bind(this);
  }

  componentDidMount() {
    let placeholder = this.props.defOptName ? this.props.defOptName : this.props.data[0].name;
    if (this.props.isEdit && this.props.isEdit !== true) {
      this.setState({ selectedName: placeholder });
    } else {
      if (this.props.value !== '') {
        this.props.data.forEach((i) => {
           Object.keys(i).forEach((n) => {
            let propsValue = isNaN(+this.props.value) ? this.props.value : +this.props.value;
            if (+i[n] === propsValue || i[n] === propsValue) {
              let value = i.name !== undefined ? i.name : i.title;
              this.setState({ selectedName: value });
            };
            return null
          });
        });
      } else { this.setState({ selectedName: placeholder }); }
    }
    if (this.props.multi) this.setMultiSelectedList(this.props.value, this.props.data);
  }

  setBlur(e) {
       e.target.className.indexOf('multi_check') !== -1 ? this.setState({ isBlur: true}) :
       this.setState({ isBlur: true, displayDrop: 'none' });
  }

  showDrop() {
    this.state.displayDrop === 'none' ? this.setState({ displayDrop: 'block' }) :
      this.setState({ displayDrop: 'none' });
  }

  setData(e) {
    e.preventDefault();
    if (e.target.value !== undefined) {
      this.props.setFormList(this.props.name, e.target.value);
      this.setState({
        selectedValue: e.target.value,
        selectedName: e.target.name,
        displayDrop: 'none'
      });
    }
  }

  isFormALert(target) {
    if (this.props.shouldValidate) {
      let shouldCheck = this.props.isPost || this.state.isBlur;
      if (target === 'class' && shouldCheck ) {
        return (this.props.value.length === 0 || this.props.value.split('').length === 0)
          ? 'form-alert'
          : null;
      }
      if (target === 'message' && shouldCheck) {
        return (this.props.value === null || this.props.value === '0') ? (
            <small className='validate-mess'>
              <b>Обязательное поле</b>
            </small>
          ) : null;
      }
    } else return null;
  }

  setMultiSelectedList(val, data) {
    if (val) {
      let defName = this.props.defOptName;
      let names = [];
      val.forEach((vi) => {
        data.forEach((di) => {
          if (di.id === vi) {
            names.push(di.name);
          }
        });
      });
      let valStr = names.join(', ');
      names.length > 0 ? this.setState({ selectedName: valStr }) : this.setState({ selectedName: defName });
    }
  }

  setSelectOpt(i, n) {
    if (i.is_center !== true) {
      let multi = this.props.multi;
      let value = i.id !== 0 ? +i.id : ''; // cause 'category' def select, arrives from api width id 0
      let key = '' + i.id + n;
      let name = i.name ? i.name : i.title;
      let isChecked = multi && this.props.value ? this.props.value.indexOf(+i.id) !== -1 : null;
      let postfixWord = this.props.name === 'region' ? ' область' : '';
      value = i[this.props.valueDefNameInObj];
      if (name !== this.props.defOptName) {
        if (multi) {
          return <button className="dropdown-item multi_check" key={key}>
            <div className="col-4 custom-control custom-control-lg form-check">
              <label className="form-flag" htmlFor={+i.id}>
                <input type="checkbox"
                  className='multi_check'
                  id={+i.id}
                  value={value}
                  onClick={() => this.props.setFormList(this.props.name, value)}
                  name={this.props.name}
                  defaultChecked={isChecked}
                  disabled={!isChecked && this.props.value.length >= this.props.maxCount}
                />
                <ins></ins>
                <span className="form-check__cheker docString multi_check">
                  {name + postfixWord}</span>
              </label>
            </div>
          </button>;
        } else {
          return <button
            className="dropdown-item"
            value={value}
            key={key}
            onClick={this.setData}
            name={name}>
            {name + postfixWord}
          </button>;
        }
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.displayDrop !== 'none') {
      document.addEventListener('click', this.setBlur, false);
    } else {
      document.removeEventListener('click', this.setBlur, false);
    }
    if (this.props.value === '' && prevState.selectedName !== this.props.defOptName) {
      this.setState({ selectedName: this.props.defOptName });
    }
    if (prevProps.multi && this.props.value !== prevProps.value) {
      this.setMultiSelectedList(this.props.value, prevProps.data);
    }
  }

  render() {
    let arrow = this.state.displayDrop !== 'none' ?
      { borderWidth: '5px 4px 0', borderColor: '#888 transparent transparent' }
      : { borderWidth: '0 4px 5px', borderColor: 'transparent transparent #888' };
    let textButColor = this.state.selectedName !== this.props.defOptName ? 'black' : '#999';
    let borderBot = this.state.displayDrop !== 'none' ? 'none' : '';
    let borderRad = this.state.displayDrop !== 'none' ? '5px 5px 0 0' : null;
    let defOptName = this.props.emptyValOpt ?
      <button
        value='0'
        onClick={this.setData}
        name={this.props.emptyValOpt}
        className="dropdown-item">{this.props.emptyValOpt}
      </button> : null;

    return this.props.data !== undefined ? (
      <div className="dropdown form-group" id={this.props.name} style={{ position: 'relative' }}>
        <button
          style={{ color: [textButColor], borderBottom: [borderBot], borderRadius: [borderRad] }}
          onClick={this.showDrop}
          className={'form-control form-control-lg form-select ' + this.isFormALert('class')
          }>{this.state.selectedName}
          <span className="select2-selection__arrow" role="presentation"><b role="presentation" style={arrow}></b></span>
        </button>
        <div className="drop" style={{ display: this.state.displayDrop }}>
          {defOptName}
          {this.props.data.map(this.setSelectOpt)}
          {this.isFormALert('message')}
        </div>
      </div>
    ) : null;
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.setBlur, false);
     // this.props.setFormList(this.props.name, '');
  }
}

export default Select;