import React from 'react'
import { View } from 'react-native'
import { t } from 'react-native-tailwindcss'
import Header from '../../components/Header'
import { Box, Container, Text } from '../../components'

const data = [
  {
    name: 'Maged Riaydh',
    code: 'G-120',
    section: 'Section 1'
  },
  {
    name: 'Maged Riaydh',
    code: 'G-120',
    section: 'Section 1'
  },
];

const Students = () => {
  return (
    <Container>
      <Header />
      <Container.Body>
        <Box padding>
          {data.map(d => (
            <View style={[t.flexRow, t.itemsCenter, t.mB5, t.pB5, t.borderB, t.borderGray400]}>
              <View style={[t.w12, t.h12, t.bgBlue100, t.roundedFull]} />
              <View style={[t.mX5]}>
                <Text label={d.name} />
              </View>
            </View>
          ))}
        </Box>
      </Container.Body>
    </Container>
  )
}

export default Students;
