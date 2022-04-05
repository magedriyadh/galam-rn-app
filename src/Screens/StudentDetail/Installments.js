import React from 'react'
import { View } from 'react-native'
import { Box, Container, Text, Table } from '../../components'

const Installments = () => {
  return (
    <Container.Body>
      <Box>
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

export default Installments