import { usersApi } from "../../api/users.api"

import { UsersActionTypes, UsersThunkType, FETCH_USERS } from "./types"

const _initUsers = (payload: []): UsersActionTypes => ({
    type: FETCH_USERS,
    payload
})

export const fetchUsers = (): UsersThunkType => async dispatch => {
    try {

        const users = await usersApi.getUsers()

        dispatch(_initUsers(users))

    } catch (err) {
        console.log(err)
    }
}