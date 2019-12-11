import React from 'react';

class Button extends React.Component {

  handleClick(event) {
    this.props.onCountChange(this.props.id);
    console.log(`State was changed by ${event.target.id}`)
  }

  render() {
    const { btnText, id} = this.props
    return (
      <button
        id={id}
        onClick={this.handleClick.bind(this)}
      >
        {btnText}
      </button>
    )
  }
}

export default Button;