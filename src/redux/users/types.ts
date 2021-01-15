import { ThunkAction } from "redux-thunk"

import { IUser } from "../../interfaces/IUser"
import { RootState } from "../root"

export const FETCH_USERS = 'FETCH_USERS'

export interface UsersState {
    users: Array<IUser>
}

interface UsersFetchAction {
    type: typeof FETCH_USERS
    payload: []
}

export type UsersActionTypes = UsersFetchAction

export type UsersThunkType = ThunkAction<Promise<void>, RootState, unknown, UsersActionTypes>
