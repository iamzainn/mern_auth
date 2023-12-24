import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/User/userSlice'


export const store = configureStore({
  reducer: {
    userInfo:userSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch