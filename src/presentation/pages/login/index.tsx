import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import ShapeImage from '~/presentation/assets/images/shape.svg'
import ArrowLeft from '~/presentation/assets/images/arrow-left.svg'
import LoginImage from '~/presentation/assets/images/login-image.svg'
import Section from '~/presentation/components/section'

const LoginScreen = () => {
  console.debug('text')
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const [email, onChangeEmail] = useState('')
  const [passwordConfirmation, onChangePasswordConfirmation] = useState('')

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView>
        <View>
          <ShapeImage style={{ position: 'absolute' }} />
          <ArrowLeft style={{ left: 32, top: 50 }} onPress={() => navigation.navigate('Start')} />
        </View>

        <View style={{ marginTop: 80, height: 100 }}>
          <Section title="Bem-vindo novamente!" />
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 25,
          }}>
          <LoginImage width={168} height={142} />
        </View>

        <TextInput style={styles.input} onChangeText={onChangeEmail} value={email} placeholder="Digite seu e-mail" />

        <TextInput
          style={styles.input}
          onChangeText={onChangePasswordConfirmation}
          value={passwordConfirmation}
          placeholder="Confirme sua senha"
        />

        <View
          style={[
            {
              width: 315,
              marginTop: 40,
              marginLeft: 'auto',
              marginRight: 'auto',
            },
          ]}>
          <TouchableOpacity
            style={{
              backgroundColor: '#50C2C9',
              height: 54,
              alignItems: 'center',
              padding: 16,
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
              }}>
              Cadastrar
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 8 }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
            }}>
            Não tem uma conta?{' '}
            <Text onPress={() => navigation.navigate('SignUp')} style={{ color: '#50C2C9' }}>
              cadastre-se
            </Text>
          </Text>
        </View>
      </ScrollView>
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
  input: {
    height: 50,
    width: '70%',
    margin: 12,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 2,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
})

export default LoginScreen
