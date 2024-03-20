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

  });

  export const showPackageById = createAsyncThunk('Singlepackage/get',async (id,thunkAPI) => {
    try {
      return await axios.get(
        `http://localhost:4000/api/package/packageById/${id}`,
        { withCredentials: true }
      );
      } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }

  });
export const PackageSlice = createSlice({
  name: 'package',
  initialState: {
    value:[],
    singlePackage:[],
    message:'',
    display:false
  },
  reducers: {
 
   reset:(state)=>{
    state.value=[];
    state.message='';
   }
,

  setDisplay : (state, action)=>{
  state.display = action.payload
  }

   
  },
  extraReducers:(builder)=>{
    builder.addCase(showPackages.fulfilled, (state,action)=>{
        state.value = action.payload.data.packages
    }).addCase(showPackages.rejected, (state,action)=>{
        console.log(action)
        state.message = action.payload
        console.log(state.message)
    }).addCase(showPackageById.fulfilled, (state,action)=>{
      state.singlePackage = action.payload.data.package4
  })
  }
})


export const { getPackages } = PackageSlice.actions
export const { setDisplay } = PackageSlice.actions
export default PackageSlice.reducer