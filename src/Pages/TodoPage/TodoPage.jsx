import React from 'react'
import { useUserAuth } from '../../components/Contexts/UserAuthContext'

const TodoPage = () => {

  const { user } = useUserAuth();

  return (
    <div>
      <div>{user.username}</div>
      a
    </div>
  )
}

export default TodoPage