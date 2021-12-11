import React, {useState} from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import api from './api'

function App() {

    const dataFromAPI = api.users.fetchAll()
    dataFromAPI.map(user => user.bookmark = false)

    /*console.log('dataFromAPI', dataFromAPI)*/

    const [users, setUsers] = useState(dataFromAPI)

    
    /*console.log(users)*/

    const handleDelete = (userId) => {
        setUsers(prevState=>prevState.filter((user) => {
            return user._id!==userId
        }))
    }

    const handleToggleBookMark = (id) => {
        setUsers(prevState => prevState.map(user => {
              if (user._id === id) {
                user.bookmark = !user.bookmark
                console.log('user.bookmark', user.bookmark)
              }
              return user
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
