import React from 'react'
import { View, StatusBar, ScrollView } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({
  children,
}) => {
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: '#0747A6', color: '#fff' }}>
      <StatusBar barStyle="light-content" />
      <View style={[t.hFull, { backgroundColor: '#F7F7FC'}]}>
        {children}
      </View>
    </SafeAreaView>
  )
}

export const Body = ({
  children,
  isScrollView,
  ...props
}) => {
  // const ViewType = isScrollView ? ScrollView : View;
  return (
    <View style={[t.pX5, t.wFull, t.hFull]}>
      <ScrollView
        {...props}
      >
        {children}
      </ScrollView>
    </View>
  )
}

Container.Body = Body;
export default Container;
