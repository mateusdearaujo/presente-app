import React from 'react'

import { Image, Text, View, TouchableOpacity } from 'react-native'

type CardProps = {
  title: string
  qtd: number
}

const Card: React.FC<CardProps> = ({ title, qtd, children }) => {
  return (
    <View
      style={{
        height: 72,
        width: '100%',
        shadowColor: 'rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        shadowRadius: 2,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        elevation: 1,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 10,
      }}>
      <View style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
        <View>{children}</View>
        <View style={{ flex: 1, padding: 6 }}>
          <Text style={{ marginBottom: 2, fontSize: 16, color: 'rgba(0, 0, 0, 0.6)' }}>{title}</Text>
          <Text style={{ fontSize: 12, color: 'grey' }}>{qtd}</Text>
        </View>
      </View>
    </View>
  )
}

export default Card
