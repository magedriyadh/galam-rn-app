import React from 'react'
import { Image, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { Box, Header, Container, Text, Space, SearchBox, Tabs } from '../../components'
import DetailsBox from './components/DetailsBox';


const tabs = [
  {
    label: 'Tab 1',
    key: 'tab_1',
  },
  {
    label: 'Tab 2',
    key: 'tab_2',
  },
  {
    label: 'Tab 3',
    key: 'tab_3',
  },
];

const StudentDetail = () => {
  const [activeTab, setActiveTab] = React.useState('tab_1')

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
              onPress={key => setActiveTab(key)}
            />
          </View>
        )}
      />
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
    </Container>
  )
}

export default StudentDetail;
