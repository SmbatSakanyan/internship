import { createSlice } from "@reduxjs/toolkit";




const hotelsSlice = createSlice({
  name: "hotelsSlice",
  initialState: {
    hotels: []
  },
  reducers: {
    setHotels(state, action) {
      state.hotels = action.payload;
    }
  }
})


export default hotelsSlice.reducer;
export const { setHotels } = hotelsSlice.actions;