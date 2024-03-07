import { createSlice } from '@reduxjs/toolkit'

export const HotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    value:"",
  },
  reducers: {
 
    getHotels: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { getHotels } = HotelSlice.actions

export default HotelSlice.reducer