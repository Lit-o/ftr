import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "9285cb5d-665e-4f8d-85e6-158b43aed29d"}
})

//создаем объект и методы
export const socialAPI = {
    getUsers(countRequest, pageRequest) {
        return instance.get("users?count=" + countRequest + "&page=" + pageRequest).then(response => {
            return response.data
        })
    },
    getUsersCount() {
        return instance.get("users").then(response => {
            return response.data
        })
    },
    setUnfollow(id) {
        return instance.delete("follow/" + id).then(response => {
            return response.data
        })
    },
    setFollow(id) {
        return instance.post("follow/" + id).then(response => {
            return response.data
        })
    }
}
