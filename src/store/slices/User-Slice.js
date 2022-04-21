import { createSlice } from "@reduxjs/toolkit"

const initialData = {
    users: [],
    totalUsers: 0
}

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