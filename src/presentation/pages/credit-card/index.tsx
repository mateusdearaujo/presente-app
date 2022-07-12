import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'

import Header from '../dashboard/components/header'
import CreditCard from '~/presentation/assets/images/credit-card-big.svg'

const CreditCardScreen = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('')
  const [titularName, setTitularName] = useState('')
  const [validateData, setValidateData] = useState('')
  const [cvv, setCvv] = useState('')

  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
          <Text style={styles.title}>Cadastrar Cartão de Crédito</Text>
          <CreditCard />
          <TextInput
            style={styles.input}
            onChangeText={setCreditCardNumber}
            value={creditCardNumber}
            placeholder="Número do cartão"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input}
            onChangeText={setTitularName}
            value={titularName}
            placeholder="Nome do titular"
            placeholderTextColor="black"
          />
          <View style={{ display: 'flex', flexDirection: 'row', width: '70%' }}>
            <TextInput
              style={{ ...styles.input, flex: 2 }}
              onChangeText={setValidateData}
              value={validateData}
              placeholder="Validade"
              placeholderTextColor="black"
            />
            <TextInput
              style={{ ...styles.input, flex: 1, marginLeft: 10 }}
              onChangeText={setCvv}
              value={cvv}
              placeholder="CVV"
              placeholderTextColor="black"
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#50C2C9',
              height: 60,
              width: '70%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
              marginBottom: 50,
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
              }}>
              Salvar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: '#000',
    fontFamily: 'Poppins-Bold',
    marginTop: 40,
  },
  input: {
    height: 50,
    width: '70%',
    margin: 12,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 2,
    padding: 10,
    paddingLeft: 25,
    backgroundColor: '#FFFFFF',
    color: 'grey',
  },
})

export default CreditCardScreen
