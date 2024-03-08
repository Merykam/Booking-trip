import { createSlice } from '@reduxjs/toolkit'

export const PackageSlice = createSlice({
  name: 'package',
  initialState: {
    value:[],
  },
  reducers: {
 
    getPackages: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { getPackages } = PackageSlice.actions

export default PackageSlice.reducer