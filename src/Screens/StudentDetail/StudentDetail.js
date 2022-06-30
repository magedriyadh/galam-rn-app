import React from 'react'
import { Image, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { Header, Container, Text, Space, SearchBox, Tabs } from '../../components'
import Installments from './Installments';
import Information from './Information';
import TimeTable from './TimeTable';


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
  const [activeTab, setActiveTab] = React.useState('time_table')

  return (
    <Container>
      <Header
        content={(
          <View>
            <View style={[t.flexRow, t.itemsCenter, t.pY2, t.pX5]}>
              <Image
                style={[t.w20, t.h20, t.roundedFull, t.border, t.borderBlack, t.overflowHidden]}
                resizeMode={'cover'}
                source={{
                  url: 'http://api.dev.galam.co/images/missing.png'
                }}
              />
              <Space width={20} />
              <View>
                <Text size={16} weight="medium" label="Maged Riyadh" />
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
