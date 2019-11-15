import React from 'react'

function AnsverResults(props) {

  let takeResults = () => {
    let resArr = [];
    let count = 0;
    props.correctAnsvers.forEach((item, n) => {
      let inspectedName = item.name
      let correctValue = item.ansver
      let selectedValue = props.stateData[inspectedName];

      if (Array.isArray(selectedValue)) {
        if (correctValue.length === selectedValue.length &&
          selectedValue.every((value) => correctValue.indexOf(value) !== -1)) {
          count = count + 1
          resArr.push({ name: item.title, res: 'Correct', id: n })
        } else { resArr.push({ name: item.title, res: 'Wrong', id: n }) }
      } else {
        if (props.stateData[inspectedName].toLowerCase() === correctValue.toLowerCase()) {
          count = count + 1
          resArr.push({ name: item.title, res: 'Correct', id: n })
        } else { resArr.push({ name: item.title, res: 'Wrong', id: n }) }
      }
    });
    let correctPer = (count / props.correctAnsvers.length) * 100
    return [count, correctPer, resArr]
  }

  let corectLength = props.correctAnsvers.length;
  let results = takeResults();
  return (
    <div id='ansver_results'>
      <h3 className='input_group'>You ansvered correctly on {results[0]} questions from {corectLength}. Your result {results[1]}%</h3>
      <div className='res_list input_group'>
        {
          results[2].map((i) => {
            let ansverColor = i.res === 'Correct' ? 'blue' : 'red'
            return <p key={i.id} className='ansvers'>{i.name}: <span style={{color: ansverColor}}>{i.res}</span></p>
          })
        }
      </div>
    </div>
  );
}

export default AnsverResults;
