import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
     // bcz we are not mutating the state we have to return state to make the changes
      state = action.payload;
      return state;
    },
    removeUser: (state) => {
      //makes whole userslice object as null
      return null;
    },
  },
});

export default userSlice.reducer;

export const { addUser, removeUser } = userSlice.actions;
