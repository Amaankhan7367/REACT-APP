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
      state.userdata = action.paylode;
    }
    logout:(state,action){
      state.status =false;
      state.userdata=null;
    }
  }
})

export const {login,logout} =Auth.actions;
export default Auth.reducers