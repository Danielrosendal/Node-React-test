import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.handleChildChange = this.handleChildChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChildChange(childName, childValue) {
    const newState = {};
    newState[childName] = childValue;
    this.setState(newState);
  }

  handleSubmit(event) {
    const url = new URL('/api/userData', 'http://localhost:3000');
    if (this.state != null) {
      const params = { userName: this.state.userName, email: this.state.eMail };
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
      fetch(url)
        .then(res => res.json())
        .then((response) => {
          this.props.onFormChange(response);
        });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <InputField name="userName" onInputChange={this.handleChildChange} />
        <InputField name="eMail" onInputChange={this.handleChildChange} />
        <form onSubmit={this.handleSubmit} >
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  onFormChange: PropTypes.func.isRequired
};

export default SearchForm;
