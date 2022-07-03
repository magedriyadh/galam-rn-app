import React from 'react'
import { View } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { Text, Box, Space } from '../../../components'


const DetailsBox = ({
  title,
  list
}) => {
  return (
    <Box padding>
      <Text size="14" label={title} />
      <Space height={10} />
      <View style={[t.h1, t.borderB, t.borderG003]} />
      <Space height={20} />
      {list.filter(f => f.value).map((data, i) => (
        <View style={[t.flexRow, t.pY3]} key={i}>
          <Text size="12" color="002" label={data.label} style={[t.flex1]} />
          <Space width={10} />
          <Text size="12" label={data.value} style={[t.flex1, t.textBlack]} />
        </View>
      ))}
    </Box>
  )
}

export default DetailsBox