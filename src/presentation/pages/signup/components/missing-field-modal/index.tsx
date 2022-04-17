import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Popup } from 'popup-ui'

type MissingFieldModalProps = {
  setModalState: Function
}

const MissingFieldModal: React.FC<MissingFieldModalProps> = ({ setModalState }) => {
  return (
    <View>
      <TouchableOpacity
        onLayout={() =>
          Popup.show({
            type: 'Warning',
            button: true,
            textBody: 'Preencha todos os campos.',
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

export default MissingFieldModal
