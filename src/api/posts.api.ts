import { IPost } from "../interfaces/IPost"
import { api } from "./axios"

export const postsApi = {
    getPosts: async (id: string) => {
        try {

            return (await api.get<[]>(`/posts?userId=${id}`)).data

        } catch (err) {
            throw err
        }
    },
    getComments: async (id: string) => {
        try {
            
            return (await api.get<[]>(`/comments?postId=${id}`)).data

        } catch (err) {
            throw err
        }
    },
    createPost: async (post: IPost) => {
        try {

            return [(await api.post('/posts', { ...post })).data]

        } catch (err) {
            throw err
        }
    },
    removePost: async (id: string) => {
        try {

            return (await api.delete(`/posts/${id}`))

        } catch (err) {
            throw err
        }
    },
    updatePost: async (post: IPost) => {
        try {

            return (await api.put(`/posts/${post.id}`, { ...post })).data

        } catch (err) {
            throw err
        }
    }
}