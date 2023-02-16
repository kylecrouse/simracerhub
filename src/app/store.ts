import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import scheduleReducer from '../features/schedule/scheduleSlice';
import { simracerhubApi } from '../services/simracerhub';

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    [simracerhubApi.reducerPath]: simracerhubApi.reducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(simracerhubApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
