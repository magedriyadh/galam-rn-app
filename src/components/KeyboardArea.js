import React from 'react'
import { KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'


const KeyboardArea = ({
  children,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default KeyboardArea