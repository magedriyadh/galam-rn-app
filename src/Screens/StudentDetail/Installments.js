import React from 'react'
import { View } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Container, Text, Table, Space } from '../../components'
import { feesDetailsShow } from '../../redux/feesDetails/action'

const Installments = () => {
  const { student } = useSelector(state => state.students)
  const { installments, total_paid_installments, remaining_amount } = useSelector(state => state.feesDetails)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(feesDetailsShow(student.id))
  }, []);

  console.log(installments.map((ins, i) => ([i + 1, ins.amount, ins.date, ins.status_i18n])))
  return (
    <Container.Body>
      <Box>
        <Table
          headers={[
            {
              label: '#',
              width: 50,
            },
            {
              label: 'Amount',
            },
            {
              label: 'Date',
            },
            {
              label: 'status',
            }
          ]}
          body={installments.map((ins, i) => ([i + 1, ins.amount, ins.date, ins.status_i18n]))}
        />
        <View style={[t.bgGray100, t.pX3, t.pY2]}>
        <Text size={12} label={`Amount paid: ${total_paid_installments}`} />
        <Text size={12} label={`Remaining amount: ${remaining_amount}`} />
        </View>
      </Box>
    </Container.Body>
  )
}

export default Installments