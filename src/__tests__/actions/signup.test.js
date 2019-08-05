import { signup } from '../../actions/user';
import user from '../../__mocks__/user';

const dispatch = jest.fn(action => action);

describe('Sign-up user', () => {
  test('returns user information', async () => {
    const result = signup(user)(dispatch);
    expect(result).toHaveProperty('type');
    expect(result).toHaveProperty('payload');
    expect(result.payload.data).toEqual(user);
  });
});
