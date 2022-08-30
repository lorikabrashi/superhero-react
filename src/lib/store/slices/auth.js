import { createSlice } from '@reduxjs/toolkit'

const data = localStorage.getItem('superhero_token') ? JSON.parse(localStorage.getItem('superhero_token')) : null

const initialState = {
  data,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem('superhero_token', JSON.stringify(action.payload))
      state.data = action.payload
    },
    logout: (state) => {
      localStorage.removeItem('superhero_token')
      state.data = null
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
