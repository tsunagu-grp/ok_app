import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../model';

// ユーザデータ
const userInitialState: User = {
  id: 0,
  name: '',
  avatar: '',
};

const userModules = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => action.payload,
  },
});

export const {updateUser} = userModules.actions;
export default userModules;
