import React from 'react'
import { useUserAuth } from '../../components/Contexts/UserAuthContext'

const TodoPage = () => {
  const {user} = useUserAuth();

  if(!user || !user.uid) {
    // console.log('check user in private', user);


    return (
      <>
        <div>login</div>
      </>
    )
  }
  console.log('check user in private', user);

  return (
    <div>TodoPage</div>
  )
}

export default TodoPage