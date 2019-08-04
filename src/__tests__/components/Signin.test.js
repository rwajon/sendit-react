import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from '../../../config/enzymeConfig';
import Signin, { Signin as SigninComponent } from '../../components/Signin/Signin';
import store from '../../__mocks__/store';

let component = '';
let form = '';
let button = '';
let inputs = '';
const user = {
  userName: 'josmi',
  password: '12345'
};

describe('<Signin />', () => {
  beforeEach(() => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <Signin />
        </MemoryRouter>
      </Provider>);

    form = component.find('#user-signin form');
    button = component.find('#user-signin form button[type="submit"]');
    inputs = component.find('#user-signin form input');

    button.simulate('click', {});
    expect(component).toHaveLength(1);
  });

  test('sign-in user if all inputs are correct', () => {
    inputs.map(input => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: user[input.instance().name]
      }
    }));

    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('displays an error if the user is not connected', () => {
    const component = shallow(<SigninComponent />);
    component.setProps({ errors: { message: 'Network error' } });
    expect(component.state().errors.message).toEqual('Network error');
  });
});
