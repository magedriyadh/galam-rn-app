import React from 'react'
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss'
import { Text, Space, Button, Input } from '../components';
import SlugInput from './SlugInput';
import SlugStep from './SlugStep';


const Login = () => {
  const [step, setStep] = React.useState(0);

  return (
    <View
      style={[
        step === 1 && t.bgPrimary,
        t.hFull, t.justifyCenter, t.itemsCenter
      ]}
    >
      {/* {step === 1 && <SlugStep />} */}
      <View style={[t.wFull, t.pX6]}>
        <View style={[t.itemsCenter]}>
          <View style={[t.w16, t.h16, t.bgBlack, t.rounded, t.bgGray400]}></View>
          <Space height={20} />
          <Text size="16" label="Slug Nmae" style={[t.textBlack]} />
        </View>
        <Space height={40} />
        <View>
          <Input label="username" />
          <Space height={20} />
          <Input label="password" password />
          <Space height={20} />
          <Button label="Sign In" />
        </View>
      </View>
    </View>
  )
}

export default Login;