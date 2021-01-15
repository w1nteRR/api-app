import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import { UserCard } from "../components/users/user.card"

import { RootState } from "../redux/root"
import { fetchUsers } from "../redux/users/actions"

export const Users: FC = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const users = useSelector((state: RootState) => state.users.users)

    useEffect(() => { 
        if(users.length) return

        console.log('call users')

        dispatch(fetchUsers()) 
    }, [users, dispatch])

    return (
        <>
        {
            users.map(user => 
                <UserCard 
                    key={user.id} 
                    name={user.name} 
                    username={user.username} 
                    email={user.email}
                    onClick={() => history.push(`/posts/${user.id}`, {
                        name: user.name
                    })} 
                />
            )
        }
        </>
    )
}