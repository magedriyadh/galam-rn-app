import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { Text, Space, Container } from '../../components'
import DetailsBox from './components/DetailsBox'


const Information = () => {
  const { student } = useSelector(state => state.students);
  const guardian = student?.guardian || {};

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
          // {
          //   label: 'Gender',
          //   value: student.gender
          // },
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
            label: 'Educational level',
            value: `${student.section}, ${student.level}`
          },
          {
            label: 'Location',
            value: student.location?.name,
          },
          {
            label: 'Address',
            value: student.address,
          },
        ]}
      />
      <Space height={20} />
      <DetailsBox
        title="Guardian Information"
        list={[
          {
            label: 'Full Parent Name',
            value: guardian.name
          },
          {
            label: 'Email',
            value: guardian.email
          },
          {
            label: "Father's number",
            value: guardian.father_mobile,
          },
          {
            label: "Mother's number",
            value: guardian.mother_mobile,
          },
          {
            label: 'Emergency number',
            value: guardian.emergency_number,
          },
        ]}
      />
      <Space height={40} />
    </Container.Body>
  )
}

export default Information