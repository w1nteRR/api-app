import { Box, Button, Typography } from "@material-ui/core"
import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RouteComponentProps, useHistory, useLocation } from "react-router-dom"

import { PostDialog } from "../../components/posts/dialog/dialog.post"
import { Header } from "../../components/posts/header"
import { DialogBody } from "../../components/posts/dialog/dialog.body"

import { PostCard } from "../../components/posts/post.card"

import { createPost, fetchPosts, toggleModalCreate } from "../../redux/posts/actions"
import { RootState } from "../../redux/root"

interface MatchParams {
    userId: string
}

interface LocationState {
    name: string
}

interface PostsProps extends RouteComponentProps<MatchParams> {}

export const Posts: FC<PostsProps> = ({
    match
}) => {
    const { userId } = match.params

    const history = useHistory()
    const dispatch = useDispatch()
    const location = useLocation<LocationState>()

    const posts = useSelector((state: RootState) => state.posts.posts)
    const isModalOpen = useSelector((state: RootState) => state.posts.modal.create)

    const { name } = location.state

    useEffect(() => { 
        // if(posts.length) return
        dispatch(fetchPosts(userId))
    }, [userId, dispatch])

    return (
        <>
        <Header>
            <Button 
                color='primary' 
                onClick={() => dispatch(toggleModalCreate(true))}
            >
                Create new post
            </Button>
        </Header>
        <Box m='20px 0' display='flex'>
            <Typography 
                variant='overline'
            >
                <b>{name}'s</b> posts
            </Typography>
        </Box>
        {
            posts.map(post => 
                <PostCard 
                    key={post.id} 
                    id={post.id} 
                    body={post.body} 
                    title={post.title}
                    onClick={() => history.push(`/post/${post.id}`)} 
                />
            )
        }
        <PostDialog 
            isOpen={isModalOpen}
            onClose={() => dispatch(toggleModalCreate(false))}
            title='Create new post' 
        >
            <DialogBody inputs={(title, body) => 
                dispatch(createPost({
                    title,
                    body,
                    userId: parseInt(userId)
                }))
            } 
            />
        </PostDialog>
        </>
    )
}