import React from 'react'
import { View, ScrollView } from 'react-native'

import { Header, CampaignCard } from '../../components'

import { mockedCampaigns } from '~/presentation/data'

const Content = () => {
  return (
    <>
      <Header />
      <ScrollView>
        {mockedCampaigns.map((campaign, index) => {
          const obj = { ...campaign, index }
          return <CampaignCard {...obj} key={index} />
        })}
        <View style={{ height: 10 }} />
      </ScrollView>
    </>
  )
}

export default Content
