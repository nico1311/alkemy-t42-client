import { actionHome } from 'redux/constants/constants';
import useFetch from 'hooks/useFetch';

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

export const postSlider = (slider) => dispatch =>{
  const {response} = useFetch;
  useFetch('localhost:4000/slider').then(
          res => {
              dispatch({type: actionHome.SET_SLIDE, payload: response});
          }
      )
 
  
};

export const postWelcomeMessage = (welcomeMessage) => dispatch => {
  const {response} = useFetch;
    useFetch('localhost:4000/').then(
          res => {
              dispatch({type: actionHome.SET_WELCOME_TEXT , payload: response});
          }
      )
  
};