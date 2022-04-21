import userSlice from "../slices/User-Slice"
import { getUserData } from "../api/users"

//This is a custom Thunk which will create action for getting User Data from server
const getUsers = (page) => {
    return async (dispatch) => {
        const data = await getUserData(page)
        dispatch(userSlice.actions.getData(data))
    }
}

export default getUsers