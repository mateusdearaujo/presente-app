import React from 'react'

import { UserProvider } from '~/presentation/context/user'
import { Router } from '~/main/routes'

const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  )
}

export default App
