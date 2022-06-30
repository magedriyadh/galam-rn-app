import React from 'react'
import { View, TouchableHighlight } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Text from './Text';

const btnVariant = {
  outlined: [t.border, t.borderWhite]
}

const Button = ({
  label,
  startIcon,
  endIcon,
  onClick,
  variant,
}) => {
  return (
    <TouchableHighlight
      style={[t.bgPrimary, t.h12, t.roundedFull, btnVariant[variant]]}
      // activeOpacity={0.9}
      underlayColor="#073E90"
      onPress={onClick}
    >
      <View style={[t.itemsCenter, t.hFull, t.flexRow, t.justifyBetween]}>
        <View style={[t.pX5]}>
          {startIcon && (
            <Text color="white" size="16" label="Text" />
          )}
        </View>
        <View>
          <Text color="white" size="16" label={label} />
        </View>
        <View style={[t.pX5]}>
          {endIcon && (
            <Text color="white" size="16" label="Text" />
          )}
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default Button;
