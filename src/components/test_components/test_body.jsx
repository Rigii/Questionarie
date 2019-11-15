import React from 'react'
import TextComp from '../reusable_components/text_component'
import SelectComp from '../reusable_components/select_components/select_comp'
import RadioComponents from '../reusable_components/radio_components/radio_component'
import CheckBoxComp from '../reusable_components/checkbox_components/checkbox_component'

function TestComponent(props) {
  let state = props.formState.stateData;

  return (
    <div id='testBody' className='test_body'>
      {props.formState.renderData.map((i) => {
        if (i.type === "text") {
          return <TextComp
            key={i.id}
            data={i}
            setFormList={props.setFormList}
            itemState={state[i.name]}
            isClear={props.formState.isClear}
            unfilledFelds={props.formState.unfilledFelds}
          />
        } else
          if (i.type === "select") {
            return <SelectComp
              key={i.id}
              data={i}
              setFormList={props.setFormList}
              isClear={props.formState.isClear}
              itemState={state[i.name]}
              unfilledFelds={props.formState.unfilledFelds}
            />
          } else
            if (i.type === "radio") {
              return <RadioComponents
                key={i.id}
                data={i}
                setFormList={props.setFormList}
                itemState={state[i.name]}
                isClear={props.formState.isClear}
                unfilledFelds={props.formState.unfilledFelds}
              />
            } else
              if (i.type === "checkbox") {
                return <CheckBoxComp
                  key={i.id}
                  data={i}
                  setFormList={props.setFormList}
                  itemState={state[i.name]}
                  isClear={props.formState.isClear}
                  unfilledFelds={props.formState.unfilledFelds}
                />
              } return null
      })}
    </div>
  );
}

export default TestComponent;

