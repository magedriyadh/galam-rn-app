import React from 'react'
import { t } from 'react-native-tailwindcss'
import { View } from 'react-native'
import { Box, Container, Text, Space, Table } from '../../components'
import Menu from '../../components/Menu'
import i18n from '../../translation/i18n'


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
        {/* <Menu  /> */}
        <Table
          headers={[
            {
              label: '#',
              width: 20,
            },
            {
              label: i18n.t('amount'),
            },
            {
              label: i18n.t('date'),
            },
            {
              label: i18n.t('status'),
            }
          ]}
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