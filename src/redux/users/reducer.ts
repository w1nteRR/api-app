import { UsersActionTypes, UsersState, FETCH_USERS } from './types'

const initialState: UsersState = {
    users: []
}

export const usersReducer = (state = initialState, action: UsersActionTypes): UsersState => {
    switch(action.type) {
        case FETCH_USERS: 
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}