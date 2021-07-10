import { actionHome } from 'redux/constants/constants';

const initialState = {
  welcomeMessage: { message: 'Es mejor, cuando Somos Mas' },
  homeNews: [
    { id: 1, title: ' Título', content: 'Cuerpo de la tarjeta 1' },
    { id: 2, title: ' Título', content: 'Cuerpo de la tarjeta 2' },
    { id: 3, title: ' Título', content: 'Cuerpo de la tarjeta 3' },
    { id: 4, title: ' Título', content: 'Cuerpo de la tarjeta 4' },
    { id: 5, title: ' Título', content: 'Cuerpo de la tarjeta 5' },
  ],
};

export default function homeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionHome.GET_WELCOME_TEXT:
      return {
        ...state,
        welcomeMessage: payload,
      };
    case actionHome.GET_NEWS:
      return {
        ...state,
        homeNews: payload,
      };
    default:
      return state;
  }
}
