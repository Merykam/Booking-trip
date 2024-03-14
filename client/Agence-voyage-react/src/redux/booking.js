import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



export const booking = createAsyncThunk(
    'booking/bookingTrip',
    async (formData, thunkAPI) => {
     
      try {
       return await axios.post(
          "http://localhost:4000/api/booking/bookingTrip",
          formData,
          { withCredentials: true }
        );
      
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );




export const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    value: [],
 
    

  },
//   reducers: {
//     setFormData: (state, action) => {
//       state.formData = action.payload;
//     }
//   },
  extraReducers: (builder) => {
    builder
    .addCase(booking.pending,(state,action)=>console.log(action))
      .addCase(booking.fulfilled, (state, action) => {
         
        state.value = action.payload.data
        console.log(state.value);
       
       
      })
      .addCase(booking.rejected, (state, action) => {
    
        console.log(action.payload.error);
        state.errorMessage = action.payload.error
       
      })
  }
});

// export const { setFormData } = userSlice.actions;
export default bookingSlice.reducer;
