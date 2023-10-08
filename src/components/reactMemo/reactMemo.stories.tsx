import React, { useState } from 'react';

export default {
    title: "React.memo demo"
}

const Counter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Eva", 'Maks', 'Galya', 'Vi'])

    const addUser = () => {
        const newUser = [...users, `Name${users.length + 1}`];
        setUsers(newUser);
    }

    return (
        <>
            <Counter count={counter} />
            <Users users={users} />
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>Add User</button>
        </>
    )
}