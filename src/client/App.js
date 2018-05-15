import React, { Component } from 'react';
import 'bootstrap';
import './app.css';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import SearchResponseData from '../server/models/SearchResponseData';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(resultJson) {
    if (resultJson == null) {
      return;
    }
    const responseData = resultJson.map(x => new SearchResponseData(x));
    this.setState({ searchResult: responseData });
  }

  render() {
    return (
      <div className="container" >
        <SearchForm onFormChange={this.handleFormChange} />
        {this.state != null && this.state.searchResult != null &&
          <SearchResult searchResult={this.state.searchResult} />}
      </div>);
  }
}
