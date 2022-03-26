import React from 'react'
import { TextInput, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Text from '../components/Text';

const SlugInput = () => {
  const [value, setValue] = React.useState('');

  return (
    <View style={[t.borderB, { borderBottomColor: '#D9DBE9'}, t.flexRow, t.itemsCenter]}>
      <View style={[t.flexGrow]}>
        <TextInput
          style={[t.h10, t.textWhite, t.textRight, t.textXl]}
          placeholder="Type here to translate!"
          onChangeText={value => setValue(value)}
          defaultValue={value}
        />
      </View>
      <View style={[t.w1_3]}>
        <Text
          size="16"
          label=".galam.co"
          color="#9CB5DB"
        />
      </View>
    </View>
  )
}

export default SlugInput