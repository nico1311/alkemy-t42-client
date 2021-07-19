import { actionHome } from 'redux/constants/constants';

export const getMessage = (welcomeMessage) => {
  return {
    type: actionHome.GET_WELCOME_TEXT,
    payload: welcomeMessage,
  };
};

export const getNews = (homeNews) => {
  return {
    type: actionHome.GET_NEWS,
    payload: homeNews,
  };
};
