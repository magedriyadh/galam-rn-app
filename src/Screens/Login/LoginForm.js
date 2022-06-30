import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss'
import { Text, Space, Button, Input } from '../../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginForm = () => {
  const { navigate } = useNavigation();
  const insets = useSafeAreaInsets();
  console.log(insets)
  return (
    <View style={[t.wFull, t.justifyCenter, t.pX6]}>
      <Space height={40} />
      <Space height={40} />
      <Space height={40} />
      <Space height={40} />

      <View style={[t.itemsCenter]}>
        <View style={[t.w16, t.h16, t.bgBlack, t.rounded, t.bgGray400]}></View>
        <Space height={20} />
        <Text size="16" label="Slug Nmae" style={[t.textBlack]} />
      </View>
      <Space height={40} />
      <View style={{ paddingTop: insets.top }} >
        <Input label="username" />
        <Space height={20} />
        <Input label="password" password />
        <Space height={20} />
        <Button
          label="Sign In"
          onClick={() => navigate('Students')}
        />
      </View>
    </View>
  )
}

export default LoginForm