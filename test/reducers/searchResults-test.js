import { expect } from 'chai';

import reducer from '../../src/reducers/searchResults';
import types from '../../src/constants/ActionTypes';

describe('Search results reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).to.eql([]);
  });

  it('handles FETCH_SEARCH_RESULTS', () => {
    const action = {
      type: types.FETCH_SEARCH_RESULTS,
      searchResults: [1, 2, 3]
    };

    expect(reducer(undefined, action)).to.eql([1, 2, 3]);
  });
});
