import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload
    },
    logout: (state) => {
      state.token = null
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
