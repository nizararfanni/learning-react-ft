import React from 'react'
import { useLogin } from '../hooks/useLogin'

const ProfilPage = () => {
    const username = useLogin()
  return (
    <div>
      <h1>hello world</h1>
      <p>username : {username}</p>
    </div>
  )
}

export default ProfilPage
