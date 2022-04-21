import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StartScreen from '~/presentation/pages/start'
import DashboardScreen from '~/presentation/pages/dashboard'
import { useUserContext } from '~/presentation/context/user'
import { MakeSignUp, MakeLogin } from '~/main/factories/pages'

const Stack = createNativeStackNavigator()

export const Router: React.FC = () => {
  const { account, isSignedIn } = useUserContext()

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
            <Stack.Screen name="Login" component={MakeLogin} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
