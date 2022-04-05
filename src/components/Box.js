import React from 'react'
import { View } from 'react-native'
import { t } from 'react-native-tailwindcss'

const Box = ({
  children,
  padding,
  paddingX,
  style = [],
}) => {
  return (
    <View
      style={[
        paddingX && t.pX5,
        padding && t.p5,
        t.bgWhite,
        t.roundedLg,
        t.shadowMd,
        ...style,
      ]}
    >
      {children}
    </View>
  )
}

export default Box;
