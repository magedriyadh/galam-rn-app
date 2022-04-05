import React from 'react'
import { t } from 'react-native-tailwindcss'
import { View } from 'react-native'
import { Box, Container, Text, Space, Table } from '../../components'


const TimeTable = ({
  headers,
  body,
}) => {
  return (
    <Container.Body>
      <Box>
        <View style={[t.p3]}>
          <Text size="14" label="Time Table" />
        </View>
        <Table
          headers={['header1', 'header2', 'header3', 'header4']}
          body={[
            ['text1', 'text2', 'text3', 'text4'],
            ['text1', 'text2', 'text3', 'text4'],
            ['text1', 'text2', 'text3', 'text4'],
          ]}
        />
      </Box>
    </Container.Body>
  )
}

export default TimeTable