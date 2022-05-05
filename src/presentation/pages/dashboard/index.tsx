import * as React from 'react'
import { Button, View, SafeAreaView, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Header } from './components'

const Drawer = createDrawerNavigator()

function TesteScreen({ navigation }) {
  return (
    <>
      <Header />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate('Notifications')} title="Go to notifications" />
      </View>
    </>
  )
}

function Teste2Screen({ navigation }) {
  return (
    <>
      <Header />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </>
  )
}

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TesteScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Notifications" component={Teste2Screen} options={{ headerShown: false }} />
      </Drawer.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#50C2C9',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default DashboardScreen
