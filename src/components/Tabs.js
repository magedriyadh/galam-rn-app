import React from 'react'
import { View, Pressable } from 'react-native'
import { t } from 'react-native-tailwindcss'
import Text from './Text'


const Tabs = ({
  tabs,
  active,
  onPress,
}) => {
  return (
    <View style={[t.flexRow, t.justifyCenter]}>
      {tabs.map((tab, i) => (
        <Pressable
          key={i}
          onPress={() => onPress(tab.key, tab)}
          style={tab.key === active && [t.borderB, t.borderB2, t.borderPrimary]}
        >
          <Text label={tab.label} size={12} style={[t.pX6, t.pY3 ]} />
        </Pressable>
      ))}
    </View>
  )
}

export default Tabs