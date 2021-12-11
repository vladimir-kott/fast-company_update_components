import React from "react"
import User from "./user"/*{users, ...rest}*/ 

const Users = ({users, onDelete, onChange}) => {
    return (
        <>
        {users.length > 0 && (
            <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <User user = {user} onDelete={onDelete} onChange = {onChange}/>
                ))}
            </tbody>
        </table>
        )}
        </>
    )
}

export default Users