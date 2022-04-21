import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slices/User-Slice"


const store = configureStore({ reducer: { user: userSlice.reducer } })

export default store