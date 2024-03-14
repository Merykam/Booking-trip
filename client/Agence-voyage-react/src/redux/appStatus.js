import { createSlice } from '@reduxjs/toolkit'

export const appStatusSlice = createSlice({
  name: 'app-status',
  initialState: {
    itemBg:"",
  },
  reducers: {
 
    setItemBg: (state, action) => {
      state.itemBg = action.payload
    },
  },
})


export const { setItemBg } = appStatusSlice.actions

export default appStatusSlice.reducer