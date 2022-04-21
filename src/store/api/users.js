import axios from "axios"
const instance = axios.create({
    baseURL: 'https://reqres.in/api/',
});

export const getUserData = async (page) => {
    try {
        const res = await instance({
            method: 'get',
            url: `/users?page=${page}`
        });
        return {
            data: res.data.data,
            totalUsers: res.data.total
        }
    } catch (error) {
        return error
    }
}