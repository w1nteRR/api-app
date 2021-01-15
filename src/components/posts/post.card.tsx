import React, { FC } from "react"
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core"

import { IPost } from "../../interfaces/IPost"

interface IPostCardProps extends IPost {
    onClick?(): void
}

export const PostCard: FC<IPostCardProps> = ({
    title,
    body,
    id,
    onClick
}) => 
    <Card 
        style={{ marginTop: 50 }} 
        variant='outlined' 
        onClick={onClick}
    >
        <CardContent>
            <Typography variant='h6' component='h6' gutterBottom>
                {title}
            </Typography>
            <Typography variant='body2'>
                {body}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Details</Button>
        </CardActions>
    </Card>
