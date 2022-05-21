import React from 'react'

import { useUserContext } from '~/presentation/context/user'

const Logout = () => {
  const { logout } = useUserContext()

  logout()

  return <></>
}

export default Logout
