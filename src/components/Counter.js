import React from 'react';

class Counter extends React.Component {
  render() {
    return <h3>{`Current count: ${this.props.count}`}</h3>
  }
}

export default Counter;