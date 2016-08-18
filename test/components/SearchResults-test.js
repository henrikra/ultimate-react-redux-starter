import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { SearchResults } from '../../src/components/SearchResults';
import SearchResult from '../../src/components/SearchResult';

describe('SearchResults', () => {
  it('does not render any SearchResult components with empty searchResults', () => {
    const props = {searchResults: []};
    const wrapper = shallow(<SearchResults {...props} />);

    expect(wrapper.find(SearchResult)).to.have.length(0);
  });

  it('renders three SearchResult components', () => {
    const props = {searchResults: [1, 2, 3]};
    const wrapper = shallow(<SearchResults {...props} />);

    expect(wrapper.find(SearchResult)).to.have.length(3);
  });
});
