import React, { useEffect, useContext } from 'react'
import { StateContext } from '../Contexts'
import { useResource } from 'react-request-hook'
import { Link } from 'react-navi'


export default function Users () {

    const {state} = useContext(StateContext);

    const [ users, getUsers ] = useResource(() => ({
        url: 'user',
        method: 'get'
    }))

    useEffect(getUsers, [])

    if ( users && !users.isLoading && users.data )
        console.log(users.data.userlist[0].username);

    return (
        <div>
            <h3><b>Users</b></h3>
            {
            (users && !users.isLoading && users.data) ? ( users.data.userlist.map((p, i) => <Link href={'/users/' + p.userid}>{p.username}</Link>) ) : 'Loading'
            }
            <div><Link href="/">Go back</Link></div>
        </div>
    )
} 