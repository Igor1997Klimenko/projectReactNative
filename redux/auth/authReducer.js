import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  nickName: null,
  stateChange: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickName: payload.nickName,
    }),
    authStateChange: (state, { payload }) => ({
      ...state, 
      stateChange: payload.stateChange
    }),
    authSignOut: () => initialState,
  }
})

export {authSlice}
