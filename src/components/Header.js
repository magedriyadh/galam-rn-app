import React from 'react'
import { View } from 'react-native'
import { t } from 'react-native-tailwindcss'
import Text from './Text'
import ArrowLeft from '../../assets/arrowLeft.svg'

const Header = () => {
  return (
    <View style={[t.flexRow, t.justifyBetween, t.itemsCenter, t.h16, t.bgWhite, t.shadowMd, t.mB10]}>
      <View style={[t.pX5]}>
        <ArrowLeft />
      </View>
      <View>
        <Text label="label" />
      </View>
      <View style={[t.pX5]}>
        <Text label="label" />
      </View>
    </View>
  )
}

export default Header;
