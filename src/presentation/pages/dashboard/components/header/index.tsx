import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

import MenuImage from '~/presentation/assets/images/menu.svg'

const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>()

  return (
    <View style={styles.backgroundStyle}>
      <View>
        <MenuImage onPress={() => navigation.openDrawer()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#50C2C9',
    height: 50,
    padding: 12,
  },
})

export default Header
