import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, TouchableHighlight, Image } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Text, Space, SearchBox, Header } from '../../components'
import { logout } from '../../redux/auth/action';
import { studentsList } from '../../redux/students/action';


const Students = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation()
  const { students } = useSelector(state => state.students)
  
  React.useEffect(() => {
    // dispatch(logout())
    dispatch(studentsList())
  }, [])

  return (
    <Container>
      <Header
        content={(
          <SearchBox contentStyle={[t.mX6, t.mY2]} />
        )}
      />
      <Container.Body>
        <Box paddingX>
            {students.map((student, i) => (
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#fff"
                onPress={() => navigate('StudentDetail', { student })}
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
                  <Image
                    style={[t.w12, t.h12, t.bgBlue100, t.roundedFull, t.border, t.borderGray200]}
                    source={{
                      uri: student.avatar_url,
                    }}
                  />
                  {/* <View style={[t.w12, t.h12, t.bgBlue100, t.roundedFull]} /> */}
                  <View style={[t.mX5]}>
                    <Text size="14" label={student.name} bold />
                    <Space height={5} />
                    <View style={[t.flexRow]}>
                      <Text size="12" label={student.admission_number} />
                      <Text size="12" label="," />
                      <Space width={5} />
                      <Text size="12" label={student.section} />
                      <Text size="12" label="," />
                      <Text size="12" label={student.level} />
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
