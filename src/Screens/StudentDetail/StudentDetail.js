import React from 'react'
import { Image, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { Header, Container, Text, Space, SearchBox, Tabs } from '../../components'
import Installments from './Installments';
import Information from './Information';
import TimeTable from './TimeTable';
import { useDispatch, useSelector } from 'react-redux';
import { studentLoad } from '../../redux/students/action';
import i18n from '../../translation/i18n';


const StudentDetail = () => {
  const [activeTab, setActiveTab] = React.useState('information')
  const { student } = useSelector(state => state.students);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(studentLoad(student.id))
  }, []);

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
              tabs={[
                {
                  label: i18n.t('information'),
                  key: 'information',
                },
                {
                  label: i18n.t('installments'),
                  key: 'installments',
                },
                {
                  label: i18n.t('time_table'),
                  key: 'time_table',
                },
              ]}
              active={activeTab}
              onPress={key => {
                // setUser(key)
                setActiveTab(key)
              }}
            />
          </View>
        )}
      />
      <Container.Body>
        {activeTab === 'information' && <Information />}
        {activeTab === 'installments' && <Installments />}
        {activeTab === 'time_table' && <TimeTable />}
      </Container.Body>
    </Container>
  )
}

export default StudentDetail;
