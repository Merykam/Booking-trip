import { createSlice } from '@reduxjs/toolkit'

export const CitySlice = createSlice({
  name: 'city',
  initialState: {
    value:"",
  },
  reducers: {
 
    getCities: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { getCities } = CitySlice.actions

export default CitySlice.reducer