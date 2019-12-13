import {createSlice, PayloadAction, combineReducers} from '@reduxjs/toolkit';
import {Talk} from '../model';

interface TalkData {
  data: Talk[];
}

const talkInitialState: TalkData = {
  data: [
    {
      id: 1,
      content:
        'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
      timestamp: new Date('2019.12.06'),
      user_id: 1,
    },
    {
      id: 2,
      content:
        'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
      timestamp: new Date('2019.12.06'),
      user_id: 2,
    },
    {
      id: 3,
      content:
        'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
      timestamp: new Date('2019.12.06'),
      user_id: 1,
    },
    {
      id: 4,
      content:
        'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
      timestamp: new Date('2019.12.06'),
      user_id: 2,
    },
    {
      id: 5,
      content:
        'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
      timestamp: new Date('2019.12.06'),
      user_id: 1,
    },
    {
      id: 6,
      content:
        'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
      timestamp: new Date('2019.12.06'),
      user_id: 2,
    },
    {
      id: 7,
      content:
        'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
      timestamp: new Date('2019.12.06'),
      user_id: 1,
    },
    {
      id: 8,
      content:
        'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
      timestamp: new Date('2019.12.06'),
      user_id: 2,
    },
  ],
};

const talkModules = createSlice({
  name: 'talk',
  initialState: talkInitialState,
  reducers: {
    updateTalk: (state, action: PayloadAction<Talk[]>) => {
      state.data = action.payload;
    },
  },
});

export const {updateTalk} = talkModules.actions;

interface Content {
  content: string;
}

const contentInitialState: Content = {
  content: '',
};

const contentModules = createSlice({
  name: 'content',
  initialState: contentInitialState,
  reducers: {
    updateContent: (state, action: PayloadAction<Content>) => {
      state = action.payload;
    },
  },
});

export const talkReducer = combineReducers({
  talk: talkModules.reducer,
  content: contentModules.reducer,
});
