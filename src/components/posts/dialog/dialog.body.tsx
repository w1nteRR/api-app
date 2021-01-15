import React, { FC, useState } from 'react'
import { Button, TextField } from '@material-ui/core'

interface IModalCreate {
    inputs: (title: string, body: string) => void
}

export const DialogBody: FC<IModalCreate> = ({
    inputs
}) => {
    
    const [title, setTile] = useState('')
    const [body, setBody] = useState('')

    
    return (
        <>
        <TextField
            autoFocus
            variant='outlined'
            label="Title"
            fullWidth
            margin='dense'
            onChange={e => setTile(e.target.value)}
        />
        <TextField
            variant='outlined'
            label="Body"
            fullWidth
            onChange={e => setBody(e.target.value)}
        />
        <Button 
            color="primary"
            variant='outlined'
            style={{
                margin: '20px 0'
            }} 
            fullWidth
            onClick={() => inputs(title, body)}
        >
            Confirm
        </Button>
        </>
    )
}