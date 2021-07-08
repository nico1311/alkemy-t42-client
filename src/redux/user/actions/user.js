import { actionUser } from 'redux/constants/constants';

export const userLogin = (user) => {
  return {
    type: actionUser.USER_LOGIN,
    data: user,
  };
};

export const userLogout = () => {
  return {
    type: actionUser.USER_LOGOUT,
  };
};
