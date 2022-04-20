import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View>
        <Text>Usuario Logado</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#EEEEEE',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})

export default DashboardScreen
