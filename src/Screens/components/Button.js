import React from 'react'
import { View, TouchableHighlight } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Text from './Text';


const Button = ({
  label,
  startIcon,
  endIcon,
}) => {
  return (
    <TouchableHighlight
      style={[t.bgPrimary, t.h12, t.roundedFull]}
      activeOpacity={0.2}
      // underlayColor="#DDDDDD"
      onPress={() => alert('Pressed!')}
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