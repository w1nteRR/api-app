import { Switch, Route } from 'react-router-dom'

import { Users } from '../pages/Users'
import { Posts } from '../pages/posts/Posts'
import { Post } from '../pages/posts/Post'

export const useRoutes = () => {
    
    return (
        <>
        <Switch>
            <Route exact path='/' component={Users} />
            <Route path='/posts/:userId' component={Posts} />
            <Route path='/post/:postId' component={Post} />
        </Switch>
        </>
    )
}