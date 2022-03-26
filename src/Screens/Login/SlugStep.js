import React from 'react'
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss'
import Input from '../components/Input';
import Text from '../components/Text';
import SlugInput from './SlugInput';


const SlugStep = () => {
  return (
    <View style={[t.wFull, t.pX12]}>
      <Text size={18} label="Login" />
      <SlugInput />
    </View>
  )
}

export default SlugStep