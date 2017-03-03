import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import App from '../components/App'


function mapStateToProps(state) {
    return state;
}


function mapDispatchToProps(dispatch) {
    const loginActions = bindActionCreators(login, dispatch);
    return {
        loginActions
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);