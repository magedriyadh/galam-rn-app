import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { Text, Space, Container } from '../../components'
import DetailsBox from './components/DetailsBox'


const Information = () => {
  const { student } = useSelector(state => state.students);

  return (
    <Container.Body>
      <DetailsBox
        title="Personal information"
        list={[
          {
            label: 'Student full name',
            value: student.name
          },
          {
            label: 'Admission number',
            value: student.admission_number
          },
          {
            label: 'Civil No',
            value: student.national_id
          },
          {
            label: 'Gender',
            value: student.gender
          },
          {
            label: 'Nationality',
            value: student.nationality?.name
          },
          {
            label: 'Religion',
            value: student.religion_i18n
          },
          {
            label: 'Joining date',
            value: student.joining_date
          },
          {
            label: 'Birth date',
            value: student.birth_date
          },
          {
            label: 'Birth place',
            value: student.birth_place
          },
          {
            label: 'Has registered before',
            value: student.has_registered_before
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