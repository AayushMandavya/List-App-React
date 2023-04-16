import React, { Component } from "react";

// renders a text field and a button to add items to a list
class Input extends Component {
  // store the current input value
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  // handle the change event of the text field
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  // handle the click event of the button
  handleClick = () => {
    // Call the addText prop with the current input value
    this.props.addText(this.state.value);
    // Clear the input value
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div>

      
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default Input;