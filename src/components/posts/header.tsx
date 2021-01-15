import React, { FC } from 'react'
import { AppBar, Box, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import { useStyles } from '../navigation/styles'

export const Header: FC = ({
    children
}) => {
    
    const styles = useStyles()
    const history = useHistory()
    
    return (
        <AppBar position='sticky' className={styles.appBar}>
            <Box display='flex' p={2} justifyContent='space-between'>
                <Button onClick={() => history.goBack()}>
                    Back
                </Button>
                <Box>
                    {children}
                </Box>
            </Box>
        </AppBar>
    )
}