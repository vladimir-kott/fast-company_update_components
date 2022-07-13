import React, {useState} from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import api from './api'

function App() {

    const dataFromAPI = api.users.fetchAll()
    dataFromAPI.map(user => user.bookmark = false)

    const [users, setUsers] = useState(dataFromAPI)

    const handleDelete = (userId) => {
        setUsers(prevState=>prevState.filter((user) => {
            return user._id!==userId
        }))
    }

    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        )
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
