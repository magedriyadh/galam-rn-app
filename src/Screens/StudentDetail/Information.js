import React from 'react'
import { useSelector } from 'react-redux'
import { Space, Container } from '../../components'
import i18n from '../../translation/i18n'
import DetailsBox from './components/DetailsBox'


const Information = () => {
  const { student } = useSelector(state => state.students);
  const guardian = student?.guardian || {};

  return (
    <Container.Body>
      <DetailsBox
        title={i18n.t('personal_information')}
        list={[
          {
            label: i18n.t('student_full_name'),
            value: student.name
          },
          {
            label: i18n.t('admission_number'),
            value: student.admission_number
          },
          {
            label:  i18n.t('nationality'),
            value: student.nationality?.name
          },
          {
            label: i18n.t('religion'),
            value: student.religion_i18n
          },
          {
            label: i18n.t('joining_date'),
            value: student.joining_date
          },
          {
            label: i18n.t('birth_date'),
            value: student.birth_date
          },
          {
            label: i18n.t('birth_place'),
            value: student.birth_place
          },
          {
            label: i18n.t('educational_level'),
            value: `${student.section}, ${student.level}`
          },
          {
            label: i18n.t('location'),
            value: student.location?.name,
          },
          {
            label: i18n.t('address'),
            value: student.address,
          },
        ]}
      />
      <Space height={20} />
      <DetailsBox
        title={i18n.t('guardian_information')}
        list={[
          {
            label: i18n.t('full_name'),
            value: guardian.name
          },
          {
            label: i18n.t('email'),
            value: guardian.email
          },
          {
            label: i18n.t('father_number'),
            value: guardian.father_mobile,
          },
          {
            label: "Mother's number",
            value: guardian.mother_mobile,
          },
          {
            label: i18n.t('emergency_number'),
            value: guardian.emergency_number,
          },
        ]}
      />
      <Space height={40} />
    </Container.Body>
  )
}

export default Information