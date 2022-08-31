import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  _id: number,
  email: string,
  name: string,
  password: string,
  newPassword: string,
}
interface IOUser {
  user: IUser,
}

const initialState: { user: IUser } = {
  user: {
    _id: 0,
    email: '',
    name: '',
    password: '',
    newPassword: '',
  },
};

const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export const selectData = (state: { currentUser: IOUser }) => state.currentUser;

export default userSlice.reducer;
