import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Root } from 'popup-ui'

import ShapeImage from '~/presentation/assets/images/shape.svg'
import ArrowLeft from '~/presentation/assets/images/arrow-left.svg'
import { Section } from '~/presentation/components'
import { Validation } from '~/presentation/protocols'
import { SuccessModal, MissingFieldModal } from '~/presentation/pages/signup/components'
import { AddAccountUseCase } from '~/domain/usecases'

type SignUpScreenProps = {
  validation: Validation
  addAccount: AddAccountUseCase
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ validation, addAccount }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const [name, onChangeName] = useState('')
  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')
  const [passwordConfirmation, onChangePasswordConfirmation] = useState('')
  const [warningModalVisible, setwarningModalVisible] = useState(false)
  const [sucessModalVisible, setSucessModalVisible] = useState(false)

  const requiredFields = [name, email, password, passwordConfirmation]

  const handleSignUp = async () => {
    if (validation.validate(requiredFields)) {
      const account = await addAccount.add({ name, email, password })

      if (account) {
        setSucessModalVisible(true)
        setTimeout(() => {
          navigation.navigate('Login')
        }, 3000)
      }
    }

    setwarningModalVisible(true)
  }

  return (
    <Root>
      <SafeAreaView>
        {warningModalVisible && <MissingFieldModal setModalState={setwarningModalVisible} />}
        {sucessModalVisible && <SuccessModal />}

        <ScrollView>
          <View>
            <ShapeImage style={{ position: 'absolute' }} />
            <ArrowLeft style={{ left: 32, top: 50 }} onPress={() => navigation.navigate('Start')} />
          </View>

          <View style={{ marginTop: 80 }}>
            <Section title="Bem-vindo a bordo!">
              <Text>Ajude-nos a melhorar a vida das pessoas</Text>
            </Section>
          </View>

          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Escreva seu nome completo"
            placeholderTextColor="grey"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Digite seu e-mail"
            placeholderTextColor="grey"
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Crie sua senha"
            placeholderTextColor="grey"
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangePasswordConfirmation}
            value={passwordConfirmation}
            placeholder="Confirme sua senha"
            placeholderTextColor="grey"
            secureTextEntry={true}
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
              onPress={handleSignUp}
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
                fontWeight: '400',
                color: '#000000',
              }}>
              já tem uma conta?{' '}
              <Text onPress={() => navigation.navigate('Login')} style={{ color: '#50C2C9' }}>
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Root>
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
    color: 'grey',
  },
})

export default SignUpScreen
