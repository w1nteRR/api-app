import { Box, Button, Typography } from '@material-ui/core'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, RouteComponentProps, useHistory } from 'react-router-dom'

import { CommentCard } from '../../components/posts/comment.card'
import { DialogBody } from '../../components/posts/dialog/dialog.body'
import { PostDialog } from '../../components/posts/dialog/dialog.post'
import { Header } from '../../components/posts/header'
import { usePost } from '../../hooks/usePost'

import { fetchComments, removePost, toggleModalCreate, updatePost } from '../../redux/posts/actions'
import { RootState } from '../../redux/root'

interface MatchParams {
    postId: string
}

interface PostProps extends RouteComponentProps<MatchParams> {}

export const Post: FC<PostProps> = ({
    match
}) => {
    
    const { postId } = match.params

    const dispatch = useDispatch()
    const { singlePost } = usePost()
    const history = useHistory()

    const postsData = useSelector((state: RootState) => state.posts)
   
    const { posts, comments, modal: { create } } = postsData

    useEffect(() => { dispatch(fetchComments(postId)) }, [postId])

    if(!posts.length) return <Redirect to='/' />

    const post = singlePost(posts, parseInt(postId))

    return (
        <>
        <Header>
            <Button 
                color='primary'
                onClick={() => dispatch(toggleModalCreate(true))}
            >
                Edit
            </Button>
            <Button 
                color='secondary' 
                onClick={() => {
                    dispatch(removePost(postId))
                    history.goBack()
                }}
            >
                Delete
            </Button>
        </Header>
        <Box p={3}>
            <Typography variant='h6' style={{ margin: '10px 0' }}>{post.title}</Typography>
            <Typography variant='caption'>{post.body}</Typography>
        </Box>
        <Box m='20px 0'>
            <Typography variant='h5'>Comments</Typography>
        </Box>
        {
            comments.map(comment => 
                <CommentCard 
                    key={comment.id}
                    body={comment.body} 
                    email={comment.email} 
                    name={comment.name}
                />
            )
        }
        <PostDialog 
            isOpen={create}
            onClose={() => dispatch(toggleModalCreate(false))}
            title='Update post' 
        >
            <DialogBody inputs={(title, body) => 
                dispatch(updatePost({
                    title,
                    body,
                    id: postId,
                    userId: post.userId
                }))
            } 
            />
        </PostDialog>
        </>
    )
}