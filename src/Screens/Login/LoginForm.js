import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss'
import { Text, Space, Button, Input } from '../../components';
import { getSlug } from '../../hooks/useStorage';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/action';

const LoginForm = () => {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [slugName, setSlugName] = React.useState();
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(login({
      login: username,
      password: password,
      access_from: 2,
      user_type: 'employee',
    }))
  }

  React.useEffect(() => {
    getSlug().then(val => setSlugName(val));
  }, [])
  
  return (
    <View style={[t.wFull, t.hFull, t.justifyCenter, t.pX6]}>
      <View style={[t.wFull]}>
        <View style={[t.wFull, t.itemsCenter]}>
          <View style={[t.w16, t.h16, t.bgBlack, t.rounded, t.bgGray400]}></View>
          <Space height={20} />
          <Text size="16" label={slugName} style={[t.textBlack]} />
        </View>
        <Space height={40} />
          <Input label="username" onChange={t => setUsername(t)} />
          <Space height={20} />
          <Input label="password" onChange={t => setPassword(t)} password />
          <Space height={20} />
          <Button
            label="Sign In"
            onClick={onSubmit}
            // onClick={() => navigate('Students')}
          />
      </View>
    </View>
  )
}

export default LoginForm