import React, {useState} from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import api from './api'

function App() {
    const [users, setUsers] = useState(api.users.fetchAll())

    /*console.log(users)*/

    const handleDelete = (userId) => {
        setUsers(prevState=>prevState.filter((user) => {
            return user._id!==userId
        }))
    }

    const handleToggleBookMark = (id) => {
        console.log('press', id)
    }

    return(
        <>
        <SearchStatus
        length = {users.length}
        />
        <Users 
        users = {users} 
        onDelete = {handleDelete}
        onChange = {handleToggleBookMark}
        >
        </Users>
        </>
    )
}

export default App 
