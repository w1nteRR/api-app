import { PostsActionTypes, PostsState, FETCH_POSTS, FETCH_POST_COMMENTS, TOGGLE_MODAL_POST_CREATE, ADD_POST, REMOVE_POST, UPDATE_POST } from './types'

const initialState: PostsState = {
    posts: [],
    comments: [],
    modal: {
        create: false
    }
}

export const postsReducer = (state = initialState, action: PostsActionTypes): PostsState => {
    switch(action.type) {
        case FETCH_POSTS: 
            return {
                ...state,
                posts: action.payload
            }
        case FETCH_POST_COMMENTS: 
            return {
                ...state,
                comments: action.payload
            }
        case TOGGLE_MODAL_POST_CREATE:
            return {
                ...state,
                modal: {
                    create: action.payload
                }
            }
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            }
        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.id) {
                        post = action.payload
                    }

                    return post
                })
            }
        default:
            return state
    }
}