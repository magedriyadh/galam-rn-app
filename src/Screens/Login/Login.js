import React from 'react'
import { Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { t } from 'react-native-tailwindcss'
import { getSlug, setSlug } from '../../hooks/useStorage';
import { schoolValidate } from '../../redux/schoolValidate/action';
import LoginForm from './LoginForm';
import SlugStep from './SlugStep';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const [step, setStep] = React.useState(0);
  const { error } = useSelector(state => state.schools)
  const { user } = useSelector(state => state.auth);
  const { navigate } = useNavigation()
  const dispatch = useDispatch();

  const handleSubmit = (value) => {
    if (step === 0) {
      dispatch(schoolValidate(value))
        .then((data) => {
          if (!data.error) {
            setSlug(value).then(() => {
              setStep(1)
            })
          }
        })
    }
  }

  React.useEffect(() => {
    getSlug().then(slug => {
      if (!slug) {
        setStep(0)
      }
    });
  }, []);

  React.useEffect(() => {
    if (error?.error) {
      Alert.alert('خطأ', error.error)
    }
  }, [error])

  React.useEffect(() => {
    if (user.name) {
      navigate('Students')
    }
  }, [user])

  return (
    <View style={[t.hFull, t.wFull]}>
      {step === 0 && <SlugStep onSubmit={handleSubmit} />}
      {step === 1 && <LoginForm />}
    </View>
  )
}

export default Login;