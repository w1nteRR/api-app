import { Card, CardContent, Typography } from '@material-ui/core'
import React, { FC } from 'react'

import { IPostComment } from '../../interfaces/IPost'

export const CommentCard: FC<IPostComment> = ({
    name,
    email,
    body,
    id,
    postId
}) =>
    <Card
        style={{ margin: '20px 0' }}
        variant='outlined'
        // onClick={onClick}
    >
        <CardContent>
            <Typography variant='overline' component='p' gutterBottom>
                {name}
            </Typography>
            <Typography variant='caption' component='p' gutterBottom>
                {body}
            </Typography>
            <Typography variant='subtitle2'>{email}</Typography>
        </CardContent>
    </Card>