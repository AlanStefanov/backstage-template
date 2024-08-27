import * as React from 'react';
import { shallow } from 'enzyme';
import ${{ parameters.moduleName }} from './${{ parameters.moduleName }}';

describe('${{ parameters.moduleName }}', () => {
  test('Render', () => {
    const wrapper = shallow(<${{ parameters.moduleName }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
