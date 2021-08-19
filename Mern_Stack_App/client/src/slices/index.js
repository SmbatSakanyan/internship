import { combineReducers } from 'redux';
import authSlice from './auth';
import errorSlice from './error';
import hotelsSlice from './hotels';

export default combineReducers({
  auth:authSlice,
  error: errorSlice,
  hotels: hotelsSlice
});