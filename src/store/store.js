import { configureStore } from '@reduxjs/toolkit';
import profiles from './reducer';

export default configureStore({
  reducer: {
    web: profiles,
  },
})