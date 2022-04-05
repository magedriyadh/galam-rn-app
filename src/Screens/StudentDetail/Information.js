import React from 'react'
import { View } from 'react-native'
import { Text, Space, Container } from '../../components'
import DetailsBox from './components/DetailsBox'


const Information = () => {
  return (
    <Container.Body>
      <DetailsBox
        title="Header title"
        list={[
          {
            label: 'Student full name',
            value: 'Maged Riaydh'
          },
          {
            label: 'Admission number',
            value: '001'
          },
        ]}
      />
      <Space height={20} />
      <DetailsBox
        title="Header title"
        list={[
          {
            label: 'Student full name',
            value: 'Maged Riaydh'
          },
          {
            label: 'Admission number',
            value: '001'
          },
        ]}
      />
    </Container.Body>
  )
}

export default Information