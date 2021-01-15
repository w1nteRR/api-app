import React, { FC } from "react"
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core"

interface IUserCard {
    name: string
    username: string
    email: string
    onClick?(): void
}

export const UserCard: FC<IUserCard> = ({
    name,
    username,
    email,
    onClick
}) =>
    <Card 
        style={{ marginTop: 50 }} 
        variant='outlined' 
        onClick={onClick}
    >
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
                {username}
            </Typography>
            <Typography variant="h5" component="h2">
                {name}
            </Typography>
            <Typography color="textSecondary">
                {email}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Posts</Button>
        </CardActions>
    </Card>
