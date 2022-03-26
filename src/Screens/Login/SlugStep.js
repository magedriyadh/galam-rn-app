import React from 'react'
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss'
import { Text } from '../../components';
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