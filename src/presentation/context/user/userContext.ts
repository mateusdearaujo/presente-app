import { createContext } from 'react'

import { UserContextProtocol } from './UserContextProtocol'

const userContext = createContext({} as UserContextProtocol)

export default userContext
