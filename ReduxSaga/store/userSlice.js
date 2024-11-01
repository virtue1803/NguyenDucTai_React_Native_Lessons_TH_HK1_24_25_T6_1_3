// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchUsersStart: (state) => { state.loading = true; },
    fetchUsersSuccess: (state, action) => { state.loading = false; state.users = action.payload; },
    fetchUsersFailure: (state, action) => { state.loading = false; state.error = action.payload; },
    addUserStart: (state) => { state.loading = true; },
    addUserSuccess: (state, action) => { state.loading = false; state.users.push(action.payload); },
    addUserFailure: (state, action) => { state.loading = false; state.error = action.payload; },
    findUserByNameStart: (state) => { state.loading = true; },
    findUserByNameSuccess: (state, action) => { state.loading = false; state.users = [action.payload]; },
    findUserByNameFailure: (state, action) => { state.loading = false; state.error = action.payload; },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUserStart,
  addUserSuccess,
  addUserFailure,
  findUserByNameStart,
  findUserByNameSuccess,
  findUserByNameFailure,
} = userSlice.actions;

export default userSlice.reducer;
