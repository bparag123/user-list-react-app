import { createSlice } from "@reduxjs/toolkit"

//This will be initial Data for the user slice
const initialData = {
    users: [],
    totalUsers: 0
}

//This is Slice which will handle the user Data as a state
const userSlice = createSlice({
    initialState: initialData,
    name: 'users',
    reducers: {
        getData(state, { payload }) {
            state.users = payload.data
            state.totalUsers = payload.totalUsers
        },
        delete(state, action) {
            state.users = state.users.filter((ele) => action.payload.id !== ele.id
            )
        }
    }
})

export default userSlice;