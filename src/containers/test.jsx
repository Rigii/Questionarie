import React, {Component} from 'react'
import { connect } from 'react-redux'
import TestBody from '../components/test_components/test_body'
import ArtistNameSelect from '../components/test_components/artist_name'
import ButtonsPanell from '../components/test_components/buttons_panell'
import {
    getInitialData,
    setFormList,
    clearState,
    getAnsverData
} from '../actions/form_actions'

class Test extends Component {

    render() {
    let { getInitialData, getAnsverData, formState, setFormList, clearState } = this.props
    let isTestBody = Object.keys(formState.stateData).length > 0 && !formState.stopTest
    
    return (
            formState.startTest && !formState.stopTest ?
            <div className='test_questions'>
                <h2>Just select this hell deam name!</h2>
            <hr className="dividing-line"></hr>
                <ArtistNameSelect
                    getInitialData={getInitialData}
                    setFormList={setFormList}
                    itemState={formState.urlName}
                />
            {isTestBody ?
                <React.Fragment>
                    <TestBody
                        getInitialData={getInitialData}
                        setFormList={setFormList}
                        formState={formState}
                    />
                    <ButtonsPanell
                        setFormList={setFormList}
                        clearState={clearState}
                        getAnsverData={getAnsverData}
                        urlName={formState.urlName}
                    />
                </React.Fragment> : null}
        </div> : null
    );
}
}

const mapStateToProps = store => {
    return {
        formState: store.formState
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setFormList: (targ, val, g) => dispatch(setFormList(targ, val, g)),
        getInitialData: (arg) => dispatch(getInitialData(arg)),
        clearState: () => dispatch(clearState()),
        getAnsverData: (arg) => dispatch(getAnsverData(arg))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test)


