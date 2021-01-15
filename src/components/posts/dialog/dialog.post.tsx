import React, { FC } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core'

interface IPostDialogProps {
    title: string
    body?: string
    onClose(): void
    isOpen: boolean
}

export const PostDialog: FC<IPostDialogProps> = ({
    title,
    body,
    onClose,
    isOpen,
    children
}) => {

    return (
        <Dialog 
            open={isOpen} 
            onClose={onClose} 
            aria-labelledby="form-dialog-title"
        >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                {body}
            </DialogContentText>
            {children}
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="secondary">
                Cancel
            </Button>
        </DialogActions>
      </Dialog>
    )
}
