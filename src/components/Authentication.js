import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { getToken } from '../hooks/useStorage';
import { View, ActivityIndicator } from 'react-native';
import { t } from 'react-native-tailwindcss';

const Authentication = ({
  children
}) => {
  const [tokenLoading, setTokenLoading] = React.useState(true);
  const { navigate } = useNavigation();

  React.useEffect(() => {
    getToken().then(token => {
      if (!token) {
        navigate('Login');
        setTokenLoading(false)
      } else {
        navigate('Students')
        setTokenLoading(false)
      }
    })
  }, [])

  return (
    <>
      {children}
      {tokenLoading && (
        <View style={[t.absolute, t.hFull, t.wFull, t.itemsCenter, t.justifyCenter, { backgroundColor: '#50596296' }]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </>
  );
}

export default Authentication