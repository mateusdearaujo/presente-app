import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import StartImage from '../../assets/images/start-image.svg'
import ShapeImage from '../../assets/images/shape.svg'
import Section from '../../components/section'

const StartScreen = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.backgroundStyle}>
        <View>
          <ShapeImage />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <StartImage width={168} height={142} />
        </View>

        <Section title="Seja bem-vindo">
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
              Iniciar
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

export default StartScreen
