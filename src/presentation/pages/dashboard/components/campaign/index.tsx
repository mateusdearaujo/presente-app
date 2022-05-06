import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'

type CampaignProps = {
  index: number
  logo: string
  title: string
  campaignName: string
  campaignImage: string
  campaignDescription: string
}

const Campaign: React.FC<CampaignProps> = ({
  index,
  logo,
  title,
  campaignName,
  campaignImage,
  campaignDescription,
}) => {
  return (
    <TouchableOpacity onPress={() => console.log(index)}>
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
        <Text style={{ textAlign: 'left', fontSize: 16 }}>{campaignDescription}</Text>
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

export default Campaign
