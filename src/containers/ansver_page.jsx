import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ButtonsPanell from '../components/ansver_page/buttons_panell'
import AnsverResults from '../components/ansver_page/ansver_results'
import {
    restartStartTest
} from '../actions/form_actions';

function AnsverPage(props) {

    let { correctAnsvers, stopTest, stateData, restartStartTest } = props
    if (stopTest) {
    window.onbeforeunload = function () {
        localStorage.removeItem('metalGods')
        return ''
    }
    }

    return (
        stopTest && correctAnsvers.length > 0 ?
            <div id='ansver_page' className='test_div'>
                <h2>Test Results</h2>
                <hr className="dividing-line"></hr>
                <AnsverResults
                    correctAnsvers={correctAnsvers}
                    stateData={stateData}
                />
                <ButtonsPanell
                    restartStartTest={restartStartTest}
                />
            </div>
            : null
    );
}

const mapStateToProps = store => {
    return {
        correctAnsvers: store.formState.correctAnsvers,
        stopTest: store.formState.stopTest,
        stateData: store.formState.stateData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        restartStartTest: () => dispatch(restartStartTest())
    };
};

AnsverPage.defaultProps = {
    restartStartTest: () => { },
    correctAnsvers: [],
    stopTest: false,
    stateData: {}
};

AnsverPage.propTypes = {
    restartStartTest: PropTypes.func,
    correctAnsvers: PropTypes.array,
    stopTest: PropTypes.bool,
    stateData: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(AnsverPage);


