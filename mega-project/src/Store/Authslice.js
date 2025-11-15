import {createSlice} from '@reduxjs/toolkit';

const initialState ={
  login = false,
  userdata=null;
}

const Authslice =createSlice({
  name:Auth,
  initialState,
  reducers:{
    login:(state,action){
      login=true,
      userdata = action.paylode
    }
    logout:(state,action){
      login =false
    }
  }
})