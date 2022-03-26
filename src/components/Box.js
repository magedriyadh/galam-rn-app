import React from 'react'
import { View } from 'react-native'
import { t } from 'react-native-tailwindcss'

const Box = ({
  children,
  padding,
}) => {
  return (
    <View
      style={[
        padding && t.p5,
        t.bgWhite,
        t.roundedLg,
        t.shadowMd
      ]}
    >
      {children}
    </View>
  )
}

export default Box;
