import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      name: "",
      pasword: "",
      image: "",
      authUser: false,
    },
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;
      const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
      const passwordValidation =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
          userId.password
        );
      state.user = userId;
      if (!userValidation || !passwordValidation) {
        state.user.authUser = false;
      } else {
        state.user.authUser = true;
        const saveState = JSON.stringify(userId);
        sessionStorage.setItem("authUser", saveState);
      }
    },
    logout(state, action) {
      state.user = {
        name: "",
        pasword: "",
        image: "",
        authUser: false,
      };
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
