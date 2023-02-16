import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface ScheduleState {
  value: number;
}

const initialState: ScheduleState = {
  value: 0,
};

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    updateSchedule: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { updateSchedule } = scheduleSlice.actions;

export const selectSchedule = (state: RootState) => state.schedule.value;

export default scheduleSlice.reducer;
