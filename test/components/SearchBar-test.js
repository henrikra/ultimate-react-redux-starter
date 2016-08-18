import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { SearchBar } from '../../src/components/SearchBar';

describe('SearchBar', () => {
  const minimumProps = {fetchSearchResults: () => {}};
  const wrapper = shallow(<SearchBar {...minimumProps} />);

  it('resets searchTerm value on form submit', () => {
    wrapper.find('[type="text"]').simulate(
      'change',
      {target: {value: 'I am writing a search term'}}
    );
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(wrapper).to.have.state('searchTerm', '');
  });
});
