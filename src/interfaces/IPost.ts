export interface IPost {
    title: string
    id?: string | number
    body: string
    userId?: number
}

export interface IPostComment {
    id?: string
    postId?: string
    body: string
    name: string
    email: string
}