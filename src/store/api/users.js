import axios from "axios"
const instance = axios.create({
    baseURL: 'https://reqres.in/api/',
});

//Making request to the server for the User Data
export const getUserData = async (page) => {
    try {
        const res = await instance({
            method: 'get',
            url: `/users?page=${page}`
        });
        //Setting Total Pages and User Data as a state
        return {
            data: res.data.data,
            totalUsers: res.data.total
        }
    } catch (error) {
        return error
    }
}