import { configureStore } from '@reduxjs/toolkit';
import todoReduser from '../Features/Todoslise.js';
export const store = configureStore({ 
  reducer:todoReduser
})