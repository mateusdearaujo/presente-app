import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CampaignScreen from '~/presentation/pages/campaign'
import ProfileScreen from '~/presentation/pages/profile'

import { Content } from './components'

const Drawer = createDrawerNavigator()

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Content} options={{ headerShown: false }} />
        <Drawer.Screen
          name="Campaign"
          component={CampaignScreen}
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
