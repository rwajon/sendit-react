import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from '../../../config/enzymeConfig';
import Signup, { Signup as SignupComponent } from '../../components/Signup/Signup';
import store from '../../__mocks__/store';
import { userToRegister } from '../../__mocks__/user';

let component = '';
let form = '';
let button = '';
let inputs = '';

describe('<Signup />', () => {
  beforeEach(() => {
    component = mount(<Provider store={store}>
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
      </Provider>);

    form = component.find('#user-signup form');
    button = component.find('#user-signup form button[type="submit"]');
    inputs = component.find('#user-signup form input');

    button.simulate('click', {});
    expect(component).toHaveLength(1);
  });

  test('sign-up user if all inputs are correct', () => {
    inputs.map(input => input.simulate('change', {
      target: {
        name: input.instance().name,
        value: userToRegister[input.instance().name]
      }
    }));

    form.simulate('submit', { preventDefault: jest.fn() });
  });

  test('displays an error if the user is not connected', () => {
    const component = shallow(<SignupComponent />);
    component.setProps({ errors: { message: 'Network error' } });
    component.instance().toggleMoreFields();
    expect(component.state().moreFields).toEqual('block');
    expect(component.state().errors.message).toEqual('Network error');
  });
});
