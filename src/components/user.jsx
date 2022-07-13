import React from "react"
import Quality from "./qualitie"
import BookMark from "./bookmark"

const User = ({
user,
onDelete,
onChange
}) => {
    return (
         <tr key = {user._id}>
            <td>{user.name}</td>
            <td>
                {user.qualities.map(qual_el => 
                    <Quality {...qual_el}/>
                )}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td>
                <BookMark
                bookmark={user.bookmark}
                onClick = {() => onChange(user._id)}
                />
            </td>
            <td><button type='button' className='btn btn-danger' onClick = {() => onDelete(user._id)}>Delete</button></td>
         </tr>
    )
}

export default User