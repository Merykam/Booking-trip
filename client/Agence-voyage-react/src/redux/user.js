import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const getUserInfo = createAsyncThunk(
    'user/info',
    async (a=null, thunkAPI) => {
     
      try {
       return await axios.get(
          "http://localhost:4000/api/auth/getUserInfo",
          { withCredentials: true }
        );
      
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );


export const handleSignin = createAsyncThunk(
  'user/signin',
  async (formData, thunkAPI) => {
    console.log(formData)
    try {
     return await axios.post(
        "http://localhost:4000/api/auth/signin",
        formData,
        { withCredentials: true }
      );
    
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: [],
    userInfo:[]
    // formData: {
    //   email: "",
    //   password: "",
    // },
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(handleSignin.pending,(state,action)=>console.log(action))
      .addCase(handleSignin.fulfilled, (state, action) => {
       
        console.log(action.payload);
       
        
        state.value = action.payload.data.data
       
       
      })
      .addCase(handleSignin.rejected, (state, action) => {
        console.log("helloo ggggg");
        console.log(action.payload);
       
      })
      .addCase(getUserInfo.fulfilled,(state, action)=>{
        state.userInfo = action.payload.data.user
        console.log(state.userInfo.user);
      });
  }
});

export const { setFormData } = userSlice.actions;
export default userSlice.reducer;
