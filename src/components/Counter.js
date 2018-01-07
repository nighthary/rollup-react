import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    countOperate: PropTypes.func.isRequired
  }

  render() {
    const { value } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={ this.add }>Add</button>
        <button onClick={ this.sub }>Sub</button>
      </div>
    );
  }

  add = () => {
    this.props.countOperate('ADD');
  }

  sub = () => {
    this.props.countOperate('SUB');
  }
}

export default Counter;
