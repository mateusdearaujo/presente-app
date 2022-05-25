import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

import Header from '../dashboard/components/header'

const CreditCardScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginBottom: 10 }}>
        <Text>Cadastrar Cartão de Crédito</Text>
      </View>
    </SafeAreaView>
  )
}

export default CreditCardScreen
