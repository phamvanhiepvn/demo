export const LOGIN = 'auth/LOGIN';
export const REGISTER = 'auth/REGISTER';
export const LOGOUT = 'auth/CLEAR_USER';

export const register = () => ({
  type: REGISTER,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});
