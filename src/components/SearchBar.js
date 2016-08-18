import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchSearchResults } from '../actions';
import Icon from './Icon';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {searchTerm: ''};
  }

  onInputChange(e) {
    this.setState({searchTerm: e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchResults(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.onFormSubmit}>
        <input
          className="search-bar__field"
          type="text"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
          placeholder="Search for songs..." />
        <Icon icon="search" className="search-bar__icon" />
      </form>
    );
  }
}

SearchBar.propTypes = {
  fetchSearchResults: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSearchResults }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
