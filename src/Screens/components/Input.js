import React from 'react'
import { TextInput, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Space from './Space';
import Text from './Text';

const Input = ({
  placeholder,
  label,
  password,
  ...props
}) => {
  const [value, setValue] = React.useState('');

  return (
    <View>
      <Text color="002" label={label} size="13" />
      <Space height={5} />
      <TextInput
        {...props}
        style={[ t.border, t.wFull, t.h10, t.rounded, t.borderG003, t.pX3]}
        placeholder={placeholder}
        onChangeText={value => setValue(value)}
        defaultValue={value}
        secureTextEntry={password}
      />
    </View>
  )
}

export default Input;
