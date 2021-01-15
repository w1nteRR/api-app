import { ThunkAction } from "redux-thunk"
import { RootState } from "../root"

import { IPost, IPostComment } from "../../interfaces/IPost"

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS'

export const TOGGLE_MODAL_POST_CREATE = 'TOGGLE_MODAL_POST_CREATE'

export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const UPDATE_POST = 'UPDATE_POST'

export interface PostsState {
    posts: Array<IPost>
    comments: Array<IPostComment>
    modal: {
        create: boolean
    }
}

interface PostsFetchAction {
    type: typeof FETCH_POSTS
    payload: []
}

interface PostsCommentsFetchAction {
    type: typeof FETCH_POST_COMMENTS
    payload: []
}

interface PostsModalToggleCreateAction {
    type: typeof TOGGLE_MODAL_POST_CREATE
    payload: boolean
}

interface PostAddAction {
    type: typeof ADD_POST,
    payload: Array<IPost>
}

interface PostRemoveAction {
    type: typeof REMOVE_POST,
    payload: number
}

interface PostUpdateAction {
    type: typeof UPDATE_POST,
    payload: IPost
}

export type PostsActionTypes = 
    PostsFetchAction | 
    PostsCommentsFetchAction | 
    PostsModalToggleCreateAction |
    PostAddAction |
    PostRemoveAction |
    PostUpdateAction

export type PostsThunkType = ThunkAction<Promise<void>, RootState, unknown, PostsActionTypes>