import { useCallback } from "react"

import { IPost } from "../interfaces/IPost"

export const usePost = () => {

    const singlePost = useCallback((posts: Array<IPost>, postId: number) => 
        posts.filter(post => post.id === postId)[0], [])

    return {
        singlePost
    }
}