import rootReducer from './slices';
import { configureStore } from '@reduxjs/toolkit'; 

// const defaultState = {
//   auth: {
//     isAuthenticated: false,
//     username: null
//   },
//   error: { message: null }
// };

// const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
})

export default store;