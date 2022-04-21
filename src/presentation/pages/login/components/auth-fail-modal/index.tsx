import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Popup } from 'popup-ui'

type AuthFailModalProps = {
  setModalState: Function
}

const AuthFailModal: React.FC<AuthFailModalProps> = ({ setModalState }) => {
  return (
    <View>
      <TouchableOpacity
        onLayout={() =>
          Popup.show({
            type: 'Warning',
            button: true,
            textBody: 'Dados invalidos, tente novamente!',
            buttonText: 'Fechar',
            callback: () => {
              setModalState(false)
              Popup.hide()
            },
          })
        }
      />
    </View>
  )
}

export default AuthFailModal
