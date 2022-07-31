import React from 'react'
import { TextInput, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import i18n from '../translation/i18n';
import Space from './Space';
import Text from './Text';

const Input = ({
  placeholder,
  label,
  password,
  onChange,
  ...props
}) => {
  const [value, setValue] = React.useState('');
  const textAlign = i18n.language === 'ar' ? 'right' : 'left';

  return (
    <View>
      <Text color="002" label={label} size="13" />
      <Space height={5} />
      <TextInput
        {...props}
        style={[ t.border, t.wFull, t.h10, t.rounded, t.borderG003, t.pX3]}
        textAlign={textAlign}
        placeholder={placeholder}
        onChangeText={value => {
          setValue(value);
          onChange(value);
        }}
        defaultValue={value}
        secureTextEntry={password}
      />
    </View>
  )
}

export default Input;
