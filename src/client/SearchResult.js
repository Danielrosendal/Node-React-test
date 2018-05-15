import React from 'react';
import PropTypes from 'prop-types';
import SearchResponseData from '../server/models/SearchResponseData';

function SearchResult(props) {
  return (
    <div >
      {props.searchResult[0].getText()}
      <p />
      {props.searchResult[0].getHeaders()}
    </div>);
}

SearchResult.propTypes = {
  searchResult: PropTypes.arrayOf(SearchResponseData).isRequired
};

export default SearchResult;
