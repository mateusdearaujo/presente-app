import React from 'react'
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Header, CampaignCard } from './components'

import Campaign from '~/presentation/pages/campaign'
import { mockedCampaigns } from '~/presentation/data'
import ProfileScreen from '~/presentation/pages/profile'

const Drawer = createDrawerNavigator()

function TesteScreen() {
  return (
    <>
      <Header />
      <ScrollView>
        {mockedCampaigns.map((campaign, index) => {
          const obj = { ...campaign, index }
          return <CampaignCard {...obj} key={index} />
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
        <Drawer.Screen
          name="Campaign"
          component={Campaign}
          options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
        />
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
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
