import React from 'react'

import { View, SafeAreaView, Text, StyleSheet } from 'react-native'

import { useUserContext } from '~/presentation/context/user'
import { Header } from '~/presentation/pages/dashboard/components'
import { Card } from './components'

import Phone from '~/presentation/assets/images/phone.svg'
import Mail from '~/presentation/assets/images/mail.svg'
import UserImage from '~/presentation/assets/images/user-image.svg'
import CreditCard from '~/presentation/assets/images/credit-card.svg'
import Calendar from '~/presentation/assets/images/calendar.svg'
import Gift from '~/presentation/assets/images/gift.svg'
import Lol from '~/presentation/assets/images/lol.svg'

const ProfileScreen = () => {
  const { account } = useUserContext()

  return (
    <SafeAreaView>
      <Header />
      <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', margin: 30, marginBottom: 10 }}>
        <UserImage />
      </View>
      <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginBottom: 10 }}>
        <Text style={styles.userName}>{account?.name}</Text>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          paddingStart: 80,
        }}>
        <Text style={styles.userInformation}>
          <Phone /> (11) 1111-1111 {'\n'}
        </Text>
        <Text style={styles.userInformation}>
          <Mail /> email@mail.com {'\n'}
        </Text>
        <Text style={styles.userInformation}>
          <CreditCard /> Informação de pagamento {'\n'}
        </Text>
        <Text style={styles.userInformation}>
          <Calendar /> Cadastrou-se em 01/01/2022{'\n'}
        </Text>
      </View>
      <View
        style={{
          paddingStart: 50,
          paddingEnd: 50,
        }}>
        <Card title="Doações Realizadas" qtd={10}>
          <Gift />
        </Card>
        <Card title="Pessoas Impactadas" qtd={100}>
          <Lol />
        </Card>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  userName: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: 'grey',
  },
  userInformation: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 16,
    color: 'grey',
  },
})

export default ProfileScreen
