import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, ActivityIndicator, I18nManager } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/auth/action';
import i18n from '../translation/i18n';

const Authentication = ({
  children
}) => {
  const { fetching } = useSelector(state => state.auth);
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUser()).unwrap()
      .then(() => navigate('Students'))
      .catch(() => navigate('Login'))
  }, [])

  return (
    <>
      {children}
      {fetching && (
        <View style={[t.absolute, t.hFull, t.wFull, t.itemsCenter, t.justifyCenter, { backgroundColor: '#50596296' }]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </>
  );
}

export default Authentication