import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

import MenuImage from '~/presentation/assets/images/menu.svg'
import SearchImage from '~/presentation/assets/images/search.svg'

const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>()

  return (
    <View style={styles.backgroundStyle}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <MenuImage onPress={() => navigation.openDrawer()} />
        <SearchImage />
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
