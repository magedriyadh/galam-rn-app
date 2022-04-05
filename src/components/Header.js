import React from 'react'
import { View } from 'react-native'
import { t } from 'react-native-tailwindcss'
import Text from './Text'
import ArrowLeft from '../../assets/arrowLeft.svg'
import BarsIcon from '../../assets/menu_open.svg'

const Header = ({
  content,
}) => {
  
  return (
    <View style={[t.bgWhite, t.shadowMd, t.mB6]}>
      <View style={[t.flexRow, t.justifyBetween, t.itemsCenter, t.h16, t.borderB, t.borderGray200]}>
        <View style={[t.pX5]}>
          <ArrowLeft />
        </View>
        <View>
          <Text size="16" label="Galam" />
        </View>
        <View style={[t.pX5]}>
          <BarsIcon />
        </View>
      </View>
      {content}
    </View>
  )
}

export default Header;
