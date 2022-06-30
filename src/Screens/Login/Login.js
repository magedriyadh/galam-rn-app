import React from 'react'
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss'
import { useNavigation } from '@react-navigation/native';
import LoginForm from './LoginForm';
import SlugStep from './SlugStep';
import validate from '../../apis/validate';


const Login = () => {
  const [step, setStep] = React.useState(0);
  const { result, post } = validate();

  const handleSubmit = (value) => {
    if (step === 0) {
      post(value)
        .then((data) => {
          setStep(1)
          console.log(data, 'data')
        })
    }
  }

  console.log(result)

  return (
    <View style={[t.hFull, t.wFull]}>
      {step === 0 && <SlugStep onSubmit={handleSubmit} />}
      {step === 1 && <LoginForm />}
    </View>
  )
}

export default Login;