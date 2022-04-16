import { useState } from 'react'

interface User {
  name: string
  email: string
  password: string
}

const useUser = () => {
  const [user, setUser] = useState(null)

  const verifyUser = ({ name, email, password }: User) => {
    if (name && email && password) {
      return console.info('user on')
    }
  }

  return {
    user,
    setUser,
    verifyUser,
  }
}

export default useUser
