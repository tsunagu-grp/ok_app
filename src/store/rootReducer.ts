import {combineReducers} from '@reduxjs/toolkit';
import userModules from '../containers/userSlice';
import talkModules from '../containers/talkSlice';

const rootReducer = combineReducers({
  // ここに createSlice で作った reducer を追加していく
  user: userModules.reducer,
  talk: talkModules.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
