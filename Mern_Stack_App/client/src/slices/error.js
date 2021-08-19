// import { SET_ERROR, CLEAR_ERROR } from '../actions/actionTypes';

// const defaultState = { message: null };

// const error = (state = defaultState, action) => {
//   switch (action.type) {
//     case SET_ERROR:
//       return { message: action.message };
//     case CLEAR_ERROR:
//       return { message: null };
//     default:
//       return state;
//   }
// };
import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice(
  {
    name: "errorSlice",
    initialState: {message:null},
    reducers:{
      setError(state,action){
        state.message = action.payload
      },
      clearError(state){
        state.message = null
      }
    }
}
)

export default errorSlice.reducer;
export const {setError,clearError} = errorSlice.actions;