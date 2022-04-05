import React from 'react'
import { View, TouchableHighlight } from 'react-native'
import { t } from 'react-native-tailwindcss'
import Header from '../../components/Header'
import { Box, Container, Text, Space, SearchBox } from '../../components'
import { data } from './helper';


const Students = () => {
  const count = data.length;

  return (
    <Container>
      <Header
        content={(
          <SearchBox contentStyle={[t.mX6, t.mY2]} />
        )}
      />
      <Container.Body>
        <Box paddingX>
            {data.map((student, i) => (
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#fff"
                onPress={() => alert('Pressed!')}
                key={i}
              >
                <View
                  style={[
                    t.flexRow,
                    t.itemsCenter,
                    t.pY5,
                    i !== 0 && t.borderT,
                    t.borderGray400
                  ]}
                >
                  <View style={[t.w12, t.h12, t.bgBlue100, t.roundedFull]} />
                  <View style={[t.mX5]}>
                    <Text size="14" label={student.name} bold />
                    <Space height={5} />
                    <View style={[t.flexRow]}>
                      <Text size="12" label={student.code} />
                      <Text size="12" label="," />
                      <Space width={5} />
                      <Text size="12" label={student.section} />
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            ))}
        </Box>
      </Container.Body>
    </Container>
  )
}

export default Students;
