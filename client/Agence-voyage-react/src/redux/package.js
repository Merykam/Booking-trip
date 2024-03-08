import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';



export const showPackages = createAsyncThunk('package/get',async (a=null,thunkAPI) => {
    try {
      return await axios.get(
        "http://localhost:4000/api/package/getAllPackages",
        { withCredentials: true }
      );
      } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
    //   dispatch(getPackages(response.data));
    //   // setSuccess(response.data.message);
    //   setAddPackage(!addPackage);
    // } catch (error) {
    //   console.error(error);
    // }
  });

export const PackageSlice = createSlice({
  name: 'package',
  initialState: {
    value:[],
    message:''
  },
  reducers: {
 
   reset:(state)=>{
    state.value=[];
    state.message='';
   }
   
  },
  extraReducers:(builder)=>{
    builder.addCase(showPackages.fulfilled, (state,action)=>{
        state.value = action.payload.data.packages
    }).addCase(showPackages.rejected, (state,action)=>{
        console.log(action)
        state.message = action.payload
        console.log(state.message)
    })
  }
})


export const { getPackages } = PackageSlice.actions
export default PackageSlice.reducer