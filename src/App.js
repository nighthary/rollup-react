import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import * as TestActions from './reducer/TestState';
import Counter from './components/Counter';

class App extends Component{
    render(){
        return (
            <div>
                hello, this is a react page!
                <Counter value={this.props.count} countOperate={this.props.countOperate}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.getIn(['test', 'count'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        countOperate: bindActionCreators(TestActions.countOperate, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);