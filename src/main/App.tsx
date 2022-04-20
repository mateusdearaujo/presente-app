import React from 'react'

import { UserContextProvider } from '~/presentation/contexts/user/provider'
import { Router } from '~/main/routes'

const App = () => {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  )
}

export default App
