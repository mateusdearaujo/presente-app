import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StartScreen from '~/presentation/pages/start'
import LoginScreen from '~/presentation/pages/login'
import UserContext from '~/presentation/contexts/user/context'
import { MakeSignUp } from '~/main/factories/pages'
import DashboardScreen from '~/presentation/pages/dashboard'

const Stack = createNativeStackNavigator()

export const Router: React.FC = () => {
  const { account, isSignedIn } = useContext(UserContext)

  useEffect(() => {
    isSignedIn()
  }, [isSignedIn])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {account ? (
          <>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="SignUp" component={MakeSignUp} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
