import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import StartImage from '~/presentation/assets/images/start-image.svg'
import ShapeImage from '~/presentation/assets/images/shape.svg'
import { Section } from '~/presentation/components'

const StartScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View>
        <View>
          <ShapeImage />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <StartImage width={168} height={142} />
        </View>

        <Section title="Seja bem-vindo">
          <Text>
            Seja solidário, faça parte da comunidade que busca melhorar a vida das pessoas através do nosso aplicativo.
          </Text>
        </Section>

        <View style={[{ width: 315, marginLeft: 'auto', marginRight: 'auto' }]}>
          <TouchableHighlight
            style={{
              backgroundColor: '#50C2C9',
              height: 54,
              alignItems: 'center',
              padding: 16,
            }}
            onPress={() => navigation.navigate('SignUp')}>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 18,
                }}>
                Iniciar
              </Text>
            </View>
          </TouchableHighlight>
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

export default StartScreen
