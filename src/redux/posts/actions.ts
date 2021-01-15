import { postsApi } from '../../api/posts.api'
import { IPost } from '../../interfaces/IPost'
import { ADD_POST, FETCH_POSTS, FETCH_POST_COMMENTS, PostsActionTypes, PostsThunkType, REMOVE_POST, TOGGLE_MODAL_POST_CREATE, UPDATE_POST } from './types'

const _initPosts = (payload: []): PostsActionTypes => ({
    type: FETCH_POSTS,
    payload
})

const _initComments = (payload: []): PostsActionTypes => ({
    type: FETCH_POST_COMMENTS,
    payload
})

const _addPost = (payload: Array<IPost>): PostsActionTypes => ({
    type: ADD_POST,
    payload
})

const _removePost = (payload: number): PostsActionTypes => ({
    type: REMOVE_POST,
    payload
})

const _updatePost = (payload: IPost): PostsActionTypes => ({
    type: UPDATE_POST,
    payload
})

const _validatePost = (title: string, body: string) => title.length && body.length

export const toggleModalCreate = (payload: boolean): PostsActionTypes => ({
    type: TOGGLE_MODAL_POST_CREATE,
    payload
})

export const fetchPosts = (id: string): PostsThunkType => async dispatch => {
    try {
        const posts = await postsApi.getPosts(id)

        dispatch(_initPosts(posts))

    } catch (err) {
        console.log(err)
    }
}

export const fetchComments = (id: string): PostsThunkType => async dispatch => {
    try {
        const comments = await postsApi.getComments(id)

        dispatch(_initComments(comments))

    } catch (err) {
        console.log(err)
    }
}

export const createPost = (post: IPost): PostsThunkType => async dispatch => {

    const isVaild = _validatePost(post.title, post.body)

    if(!isVaild) return alert('Error')

    try {
        const newPost: Array<IPost> = await postsApi.createPost(post)

        dispatch(_addPost(newPost))
        dispatch(toggleModalCreate(false))

    } catch (err) {
        console.log(err)
    }
}

export const removePost = (id: string): PostsThunkType => async dispatch => {
    try {

        await postsApi.removePost(id)

        dispatch(_removePost(parseInt(id)))

    } catch (err) {
        console.log(err)
    }
}

export const updatePost = (post: IPost): PostsThunkType => async dispatch => {

    const isVaild = _validatePost(post.title, post.body)

    if(!isVaild) return alert('Error')

    try {

        const updatedPost = await postsApi.updatePost(post)

        dispatch(_updatePost(updatedPost))

        dispatch(toggleModalCreate(false))

    } catch (err) {
        console.log(err)
    }
}