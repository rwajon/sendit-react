import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { mount } from '../../../config/enzymeConfig';
import store, { adminStore } from '../../__mocks__/store';
import Routes from '../../components/Routes';
import Home from '../../components/Home';
import Signin from '../../components/Signin';
import Signup from '../../components/Signup';

describe('<Routes />', () => {
  test('renders <Home /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Home)).toHaveLength(1);
  });

  test('renders <Signin /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/signin']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Signin)).toHaveLength(1);
  });

  test('renders <Signup /> without crashing', () => {
    const component = mount(<Provider store={store}>
        <MemoryRouter initialEntries={['/signup']}>
          <Routes />
        </MemoryRouter>
      </Provider>);
    expect(component.find(Signup)).toHaveLength(1);
  });
});
