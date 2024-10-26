import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {RootState} from './store';

export interface Note{
  title: string;
  desc: string;
}

const initialState: Array<Note> = [];

const notesSlice = createSlice({
  name: 'Usersliceone',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.push(action.payload);
    },
  },
});

export const {addNote} = notesSlice.actions;
export const noteSelector = (state: any) => state.notes;
export default notesSlice.reducer;


// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0,
// };

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment(state) {
//       state.value += 1;
//     },
//     decrement(state) {
//       state.value -= 1;
//     },
//     incrementByAmount(state, action: PayloadAction<number>) {
//       state.value += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// export default counterSlice.reducer;