import React from 'react'
import { View, Pressable, I18nManager } from 'react-native'
import { t } from 'react-native-tailwindcss'
import Text from '../Text'
import ArrowLeft from '../../../assets/arrowLeft.svg'
import BarsIcon from '../../../assets/menu_open.svg'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/auth/action'
import i18n from '../../translation/i18n'
import { changeLanguage } from 'i18next'
import { setLan } from '../../hooks/useStorage'


const Header = ({
  content,
  withClickBack
}) => {
  const { goBack, navigate } = useNavigation()
  const dispatch = useDispatch();

  const changeLan = () => {
    changeLanguage(newlang, async () => {
      await setLan(newlang)
      if(newlang === 'ar') {
        I18nManager.forceRTL(true);
        I18nManager.allowRTL(true);
      } else {
        I18nManager.forceRTL(false);
        I18nManager.allowRTL(false);
      }
      dispatch(logout())
      navigate('Login')
    })
  }

  const newlang = i18n.language === 'ar' ? 'en' : 'ar';

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
          <Text size="16" label={i18n.t('galam')} />
        </View>
        <View style={[t.pX5]}>
          <Pressable
            onPress={changeLan}
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
