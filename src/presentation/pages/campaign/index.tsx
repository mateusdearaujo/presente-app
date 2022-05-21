import React from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'

import { Header } from '~/presentation/pages/dashboard/components'
import { mockedCampaigns, campaign } from '~/presentation/data'

const CampaignScreen = () => {
  const route: RouteProp<{ params: { index: number } }> = useRoute()

  const { index } = route.params

  const campaignData: campaign = mockedCampaigns[index]

  return (
    <>
      <Header />
      <ScrollView>
        <View>
          <Image
            source={{
              height: 200,
              uri: campaignData.campaignImage,
            }}
          />
        </View>
        <View style={{ padding: 10, paddingTop: 0 }}>
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontSize: 20, color: '#000000', fontWeight: 'bold', paddingBottom: 10 }}>
              {campaignData.title}
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 16, color: '#000000', fontWeight: 'bold', paddingBottom: 10 }}>
              Sobre a campanha:
            </Text>
            <Text style={{ fontSize: 12 }}>{campaignData.campaignText}</Text>
          </View>
        </View>
        <View
          style={{
            minWidth: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#50C2C9',
              height: 60,
              width: 160,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
              }}>
              $ Contribuir
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

export default CampaignScreen
