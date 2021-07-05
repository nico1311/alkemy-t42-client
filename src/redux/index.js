import { combineReducers } from 'redux';
import homeReducer from './Home/reducers/home';

export default combineReducers({
  home: homeReducer,
});
