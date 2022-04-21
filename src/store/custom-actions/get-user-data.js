import userSlice from "../slices/User-Slice"
import { getUserData } from "../api/users"

const getUsers = (page) => {
    return async (dispatch) => {
        const data = await getUserData(page)
        dispatch(userSlice.actions.getData(data))
    }
}

export default getUsers