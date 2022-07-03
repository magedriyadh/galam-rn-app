import React from 'react'
import { View, TouchableOpacity, Pressable } from 'react-native'
import { t } from 'react-native-tailwindcss'
import Text from '../Text'
import ArrowLeft from '../../../assets/arrowLeft.svg'
import BarsIcon from '../../../assets/menu_open.svg'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/auth/action'

const Header = ({
  content,
  withClickBack
}) => {
  const { goBack, navigate } = useNavigation()
  const dispatch = useDispatch();
  
  return (
    <View style={[t.bgWhite, t.shadowMd, t.mB6]}>
      <View style={[t.flexRow, t.justifyBetween, t.itemsCenter, t.h16, t.borderB, t.borderGray200]}>
        <View style={[t.pX5]}>
          {withClickBack && (
            <Pressable
              onPress={() => goBack()}
              style={[t.w8, t.h8, t.itemsCenter, t.justifyCenter]}
            >
              <ArrowLeft />
            </Pressable>
          )}
        </View>
        <View>
          <Text size="16" label="Galam" />
        </View>
        <View style={[t.pX5]}>
          <Pressable
            onPress={() => {
              dispatch(logout())
              navigate('Login')
            }}
            style={[t.w8, t.h8, t.itemsCenter, t.justifyCenter]}
          >
            <BarsIcon />
          </Pressable>
        </View>
      </View>
      {content}
    </View>
  )
}

export default Header;
