import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
  name: "Users",
  initialState: {},
  reducers: {
    getUser() {},
    setUser(state, action) {
      const userData = action.payload;
      // return [ ...state, ...userData ]
      return {
        ...state, 
        users: [...userData] 
      }
    }
  }
});


export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;