import { combineReducers } from 'redux'

import { postsReducer } from './posts/reducer'
import { usersReducer } from './users/reducer'

import { UsersState } from './users/types'
import { PostsState } from './posts/types'

export const rootReducer = () => combineReducers({
    users: usersReducer,
    posts: postsReducer
})

export type RootState = {
    users: UsersState
    posts: PostsState
}