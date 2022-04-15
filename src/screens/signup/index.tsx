import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { NavigationProp } from '@react-navigation/native'

import ShapeImage from '../../assets/images/shape.svg'
import ArrowLeft from '../../assets/images/arrow-left.svg'
import Section from '../../components/section'

interface SignUpScreenProps {
  navigation: NavigationProp<any>
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.backgroundStyle}>
        <View>
          <ShapeImage style={{ position: 'absolute' }} />
          <ArrowLeft
            style={{ left: 32, top: 50 }}
            onPress={() => navigation.navigate('Start')}
          />
        </View>

        <Section title="Bem-vindo a bordo!">
          <Text>
            Seja solidário, faça parte da comunidade que busca melhorar a vida
            das pessoas através do nosso aplicativo.
          </Text>
        </Section>

        <View style={[{ width: 315, marginLeft: 'auto', marginRight: 'auto' }]}>
          <TouchableOpacity
            style={{
              backgroundColor: '#50C2C9',
              height: 54,
              alignItems: 'center',
              padding: 16,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
              }}
            >
              Cadastrar
            </Text>
          </TouchableOpacity>
        </View>
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

export default SignUpScreen
