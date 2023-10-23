import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CakeReducer from "./features/cake/CakeSlice";
import CreamReducer from "./features/icecream/CreamSlice";
import UserReducer from "./features/users/UserSlice";

const store = configureStore({
  reducer: {
    cakes: CakeReducer,
    creams: CreamReducer,
    users: UserReducer,
  },
});
export default store;
