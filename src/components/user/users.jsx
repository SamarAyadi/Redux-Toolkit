import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../feature/user/userSlice'

const Users = () => {


  const userList = useSelector(state => state.utilisateur.users)
  const dispatch = useDispatch()

  return (
    <>
      <h1>List of users</h1>
      {userList.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <button onClick={() =>dispatch(deleteUser(user.id)) }>Delete</button>
        </div>
      ))}
    </>
  )
}

export default Users