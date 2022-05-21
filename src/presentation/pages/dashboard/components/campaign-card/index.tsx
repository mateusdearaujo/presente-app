import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

type CampaignCardProps = {
  index: number
  logo: string
  title: string
  campaignName: string
  campaignImage: string
  campaignDescription: string
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  index,
  logo,
  title,
  campaignName,
  campaignImage,
  campaignDescription,
}) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Campaign', { index })}>
      <View style={{ height: 66, display: 'flex', flexDirection: 'row' }}>
        <View style={{ padding: 12 }}>
          <Image
            style={{ resizeMode: 'contain' }}
            source={{
              height: 40,
              width: 40,
              uri: logo,
            }}
          />
        </View>
        <View style={{ paddingTop: 10 }}>
          <Text style={{ fontSize: 20, color: '#000000' }}>{title}</Text>
          <Text style={{ fontSize: 14, color: '#000000' }}>{campaignName}</Text>
        </View>
      </View>
      <View>
        <Image
          source={{
            height: 200,
            uri: campaignImage,
          }}
        />
      </View>
      <View style={{ paddingTop: 10, paddingLeft: 20, height: 98 }}>
        <Text style={{ textAlign: 'left', fontSize: 16, color: 'grey' }}>{campaignDescription}</Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          alignSelf: 'stretch',
        }}
      />
    </TouchableOpacity>
  )
}

export default CampaignCard
