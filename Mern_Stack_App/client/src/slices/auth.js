import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";




const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isAuthenticated: false,
    username: null
  },
  reducers: {
    setCurentUser(state, action) {
      state.isAuthenticated = !!action.payload.username;
      state.username = action.payload.username
    },
    clearUser(state) {
      state.isAuthenticated = false;
      state.username = null;
    },
    async verifyUser(state) {
        try {
          const res = await axios('/auth/verify', { withCredentials: true })
          if (res.data.isAuthenticated) {
            state.isAuthenticated = !!res.data.username;
            state.username = res.data.username
          }
          else {
            state.data.isAuthenticated = false;
            state.username = null
          };
        } catch (err) { console.log(err) }
    }
  }
})


export default authSlice.reducer;
export const { setCurentUser, clearUser,verifyUser } = authSlice.actions;