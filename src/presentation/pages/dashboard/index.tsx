import React from 'react'
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Header, Campaign } from './components'

import { mockedCampaigns } from '~/presentation/data'

const Drawer = createDrawerNavigator()

function TesteScreen() {
  return (
    <>
      <Header />
      <ScrollView>
        {mockedCampaigns.map((campaign, index) => {
          const obj = { ...campaign, index }
          return <Campaign {...obj} key={index} />
        })}
        <View style={{ height: 10 }} />
      </ScrollView>
    </>
  )
}

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TesteScreen} options={{ headerShown: false }} />
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
