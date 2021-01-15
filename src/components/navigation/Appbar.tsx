import React, { FC} from "react"
import { useLocation } from "react-router-dom"
import { AppBar, Typography, Toolbar } from '@material-ui/core'

import { useStyles } from './styles'

import { usePagepath } from "../../hooks/usePagepath"

export const Appbar: FC = () => {

    const styles = useStyles()
    const location = useLocation()
    const name = usePagepath(location.pathname)

    return (
        <AppBar position="static" className={styles.appBar}>
            <Toolbar>
                <Typography variant="h6" color='textSecondary'>
                    {name}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}