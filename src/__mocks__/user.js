export default (Object.user = {
  firstName: 'John',
  lastName: 'Smith',
  userName: 'josmi',
  email: 'josmi@email.com',
  phone: '078111111',
  country: 'USA',
  city: 'New-York',
  address: 'Central Park Av'
});

export const userToRegister = {
  ...Object.user,
  password: 'Abcd1234!',
  confirmPassword: 'Abcd1234!'
};

export const mismatchedUserPassword = {
  ...Object.user,
  password: '12345678',
  confirmPassword: '1234abcd'
};

export const wrongUserPassword = {
  ...Object.user,
  password: 'Abcd1234'
};
