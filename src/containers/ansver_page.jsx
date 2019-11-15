import React from 'react';
import { connect } from 'react-redux';
import ButtonsPanell from '../components/ansver_page/buttons_panell'
import AnsverResults from '../components/ansver_page/ansver_results'
import {
    restartStartTest
} from '../actions/form_actions';

function AnsverPage(props) {

    let { correctAnsvers, stopTest, stateData, restartStartTest } = props
    if (stopTest) {window.onbeforeunload = function () {
        localStorage.removeItem('metalGoads')
        return ''
    }
}

    return (
        stopTest && correctAnsvers.length > 0 ?
            <div id='ansver_page'>
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

export default connect(mapStateToProps, mapDispatchToProps)(AnsverPage);


