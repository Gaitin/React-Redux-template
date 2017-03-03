/**
 * Created by 143301 on 2017/3/3.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {
    render() {
        return (
            <div>
                <h1>demo</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    const loginActions = bindActionCreators(login, dispatch);
    return {
        loginActions
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);