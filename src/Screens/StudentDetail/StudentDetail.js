import React from 'react'
import { Image, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { Header, Container, Text, Space, SearchBox, Tabs } from '../../components'
import Installments from './Installments';
import Information from './Information';
import TimeTable from './TimeTable';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { studentLoad } from '../../redux/students/action';

const tabs = [
  {
    label: 'Information',
    key: 'information',
  },
  {
    label: 'Installments',
    key: 'installments',
  },
  {
    label: 'Time table',
    key: 'time_table',
  },
];

const StudentDetail = () => {
  const [activeTab, setActiveTab] = React.useState('information')
  const { student } = useSelector(state => state.students);
  const { params } = useRoute();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(studentLoad(params?.student.id))
  }, []);

  console.log(student)
  return (
    <Container>
      <Header
        withClickBack
        content={(
          <View>
            <View style={[t.flexRow, t.itemsCenter, t.pY2, t.pX5]}>
              <Image
                style={[t.w20, t.h20, t.roundedFull, t.border, t.borderGray300, t.overflowHidden]}
                resizeMode={'cover'}
                source={{
                  url: student.avatar_url
                }}
              />
              <Space width={20} />
              <View>
                <Text size={16} weight="medium" label={student.name} />
                <Text label="001" />
              </View>
            </View>
            <Space height={20} />
            <Tabs
              tabs={tabs}
              active={activeTab}
              onPress={key => {
                // setUser(key)
                setActiveTab(key)
              }}
            />
          </View>
        )}
      />
      {activeTab === 'information' && <Information />}
      {activeTab === 'installments' && <Installments />}
      {activeTab === 'time_table' && <TimeTable />}
      
    </Container>
  )
}

export default StudentDetail;
