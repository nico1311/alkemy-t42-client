import { combineReducers } from 'redux';
import homeReducer from './Home/reducers/home';
import userReducer from './user/reducers/user';

const appReducers = combineReducers({
  home: homeReducer,
  user: userReducer,
});

export default appReducers;
