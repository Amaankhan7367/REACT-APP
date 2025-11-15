import {createSlice} from '@reduxjs/toolkit';

const initialState ={
  status = false,
  userdata=null;
}

const Authslice =createSlice({
  name:Auth,
  initialState,
  reducers:{
    login:(state,action){
      state.status=true;
      userdata = action.paylode;
    }
    logout:(state,action){
      state.status =false;
    }
  }
})