import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(this.props.name, event.target.value);
  }

  render() {
    return (
      <form>
        <label htmlFor="firstName">
          {this.props.name}:
          <input
            id="firstName"
            type="text"
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

InputField.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default InputField;
