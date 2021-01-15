import { api } from "./axios"

export const usersApi = {
    getUsers: async () => {
        try {

            return (await api.get<[]>('/users')).data

        } catch (err) {
            throw err
        }
    }
}