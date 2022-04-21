import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Popup } from 'popup-ui'

const SuccessModal = () => {
  return (
    <View>
      <TouchableOpacity
        onLayout={() =>
          Popup.show({
            type: 'Success',
            button: true,
            textBody: 'Logado com sucesso.',
            autoclose: true,
            callback: () => Popup.hide(),
          })
        }
      />
    </View>
  )
}

export default SuccessModal
